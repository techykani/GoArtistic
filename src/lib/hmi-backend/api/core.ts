import ky from 'ky'
import { HttpMethod } from 'ky/distribution/types/options'

const isStaging = process.env.NEXT_PUBLIC_HMI_BACKEND_STAGING === 'true'

const hmiBackendUrl = isStaging
  ? 'https://hmidevapigateway.azure-api.net'
  : 'https://hmimembapi.azure-api.net'

export function callHmiBackend<T>(
  name: string,
  method: HttpMethod,
  body: Record<string, string>,
): Promise<T> {
  return ky(`${hmiBackendUrl}/${isStaging ? `${name}/` : ''}${name}_Json`, {
    method,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_OCP_APIM_SUBSCRIPTION_KEY!,
    },
    json: body,
  }).json<T>()
}
