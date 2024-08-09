import { useRouter } from 'next/router'
import {
  useCallback,
  useLayoutEffect,
  useRef,
  Dispatch,
  // MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { gtmVirtualPageView } from '@/lib/gtm'
import { pageview } from '@/lib/gtag'
type Cleanup = void | (() => void)
export type Size = { width: number; height: number }
export type Position = { x: number; y: number }
export type Intersection = {
  intersectionRatio: number
  isIntersecting: boolean
  offsetBoundingRect: DOMRectReadOnly
}
type IntersectionOptions = {
  rootMargin?: string
  threshold?: number | number[]
}
type VisibleScroll = {
  offsetBoundingRect: DOMRectReadOnly
  x: number
  y: number
}

export function runCleanup(cleanup: Cleanup) {
  if (cleanup instanceof Function) {
    cleanup()
  }
}

export function windowSizeEffect(effect: (width: number, height: number) => Cleanup): () => void {
  let cleanup: Cleanup
  const onResize = () => {
    runCleanup(cleanup)
    cleanup = effect(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)
  onResize()
  return () => {
    runCleanup(cleanup)
    window.removeEventListener('resize', onResize)
  }
}

// Always pass in a callback made with useCallback!
export function useWindowSizeEffect(
  effect: (width: number, height: number) => Cleanup,
  deps: any[],
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => windowSizeEffect(effect), deps)
}

export function useWindowSize(): Size | undefined {
  const [windowSize, setWindowSize] = useState<Size>()
  useWindowSizeEffect((width, height) => setWindowSize({ width, height }), [])
  return windowSize
}

export function windowScrollEffect(effect: (x: number, y: number) => Cleanup): () => void {
  let cleanup: Cleanup
  const onScroll = () => {
    runCleanup(cleanup)
    cleanup = effect(window.scrollX, window.scrollY)
  }
  document.addEventListener('scroll', onScroll)
  onScroll()
  return () => {
    runCleanup(cleanup)
    document.removeEventListener('scroll', onScroll)
  }
}

// Always pass in a callback made with usecallback!
export function useWindowScrollEffect(effect: (x: number, y: number) => Cleanup, deps: any[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => windowScrollEffect(effect), deps)
}

export function useWindowScroll(): Position | undefined {
  const [scroll, setScroll] = useState<Position>()
  useWindowScrollEffect((x, y) => setScroll({ x, y }), [])
  return scroll
}

export function animationFrameEffect(effect: () => Cleanup): () => void {
  let cleanup: Cleanup
  const frameId = window.requestAnimationFrame(() => {
    runCleanup(cleanup)
    cleanup = effect()
  })
  return () => {
    runCleanup(cleanup)
    window.cancelAnimationFrame(frameId)
  }
}

// cb should be created with useCallback
export function useAnimationFrameEffect(effect: () => Cleanup, deps: any[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => animationFrameEffect(effect), deps)
}

export function intersectionObserverEffect(
  element: RefObject<Element>,
  effect: (intersection: Intersection) => Cleanup,
  options?: IntersectionOptions,
): () => void {
  let cleanup: Cleanup
  const observer = new IntersectionObserver(
    (entries) => {
      runCleanup(cleanup)
      const boundingRect = entries[0].boundingClientRect
      const top = boundingRect.top + window.scrollY
      const left = boundingRect.left + window.scrollX

      cleanup = effect({
        intersectionRatio: entries[0].intersectionRatio,
        isIntersecting: entries[0].isIntersecting,
        offsetBoundingRect: new DOMRectReadOnly(left, top, boundingRect.width, boundingRect.height),
      })
    },
    {
      root: null,
      rootMargin: options?.rootMargin,
      threshold: options?.threshold,
    },
  )
  if (element.current) {
    observer.observe(element.current)
  }
  return () => {
    runCleanup(cleanup)
    observer.disconnect()
  }
}

// ensure that usecallback is passed in!
export function useIntersectionEffect(
  element: RefObject<Element>,
  effect: (intersection: Intersection) => void,
  deps: any[],
  options?: IntersectionOptions,
) {
  const { rootMargin, threshold } = options ?? {
    rootMargin: undefined,
    threshold: undefined,
  }
  useEffect(
    () => intersectionObserverEffect(element, effect, { rootMargin, threshold }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [element, rootMargin, threshold, effect, ...deps],
  )
}

export function useIntersection(
  element: RefObject<Element>,
  options?: IntersectionOptions,
): Intersection | undefined {
  const [intersection, setIntersection] = useState<Intersection>()
  useIntersectionEffect(element, setIntersection, [], options)
  return intersection
}

export function useVisibleScrollEffect(
  element: RefObject<Element>,
  effect: (offsetBoundingRect: DOMRectReadOnly, x: number, y: number) => void,
  deps: any[],
  options?: IntersectionOptions,
) {
  useIntersectionEffect(
    element,
    (intersection) => {
      if (intersection.isIntersecting) {
        return windowScrollEffect(() =>
          effect(intersection.offsetBoundingRect, window.scrollX, window.scrollY),
        )
      }
    },
    deps,
    options,
  )
}

export function useVisibleScroll(element: RefObject<Element>, options?: IntersectionOptions) {
  const [visibleScroll, setVisibleScroll] = useState<VisibleScroll>()
  useVisibleScrollEffect(
    element,
    (offsetBoundingRect, x, y) => setVisibleScroll({ offsetBoundingRect, x, y }),
    [],
    options,
  )
  return visibleScroll
}

export const useOutsideClick = (
  ref: RefObject<Element>,
  action: { setState?: Dispatch<SetStateAction<any>>; dispatch?: any },
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (action?.setState) {
          action.setState(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}

export function useLockBodyScroll(): void {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const mouseMoveHandler = useCallback((event: any) => {
    const { clientX, clientY } = event
    setMousePosition({ x: clientX, y: clientY })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return mousePosition
}

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function getSessionStorageOrDefault(key: string, defaultValue: boolean) {
  if (typeof window !== 'undefined') {
    const stored = sessionStorage?.getItem(key)
    if (!stored) {
      return defaultValue
    }
    return JSON.parse(stored)
  }
}

export function useSessionStorage(key: string, defaultValue: boolean) {
  const [value, setValue] = useState(getSessionStorageOrDefault(key, defaultValue))

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export const useScroll = () => {
  const elRef = useRef<null | HTMLDivElement>(null)
  const executeScroll: any = () => elRef?.current?.scrollIntoView()

  return [executeScroll, elRef]
}

interface CustomPageProps {
  page: object | null
}
// generic type for pageProps
export const useAnalytic = <T extends CustomPageProps>(pageProps: T) => {
  const router = useRouter()

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    }

    const handleRouteChange = (url: URL) => {
      pageview(url)
    }

    gtmVirtualPageView(mainDataLayer)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [pageProps, router.pathname, router.events])
  return
}
