import { Description } from "@/components/ui"
import Title from "@/components/widgets/shared/title"
import Link from "next/link"

const EnquirySec = ({ title, description, btn1, btn2 }: any) => {
  return (
    <section className="w-full bg-[#FBFBFB] px-6 md:px-[71px] py-12 md:py-20">
      <div className="container mx-auto">
        <div className="bg-[#FDCB4E] min-h-[233px] rounded-2xl px-6 py-8 md:px-20 md:py-12 flex flex-col md:flex-row md:justify-between gap-8 md:gap-20">
          <div className="w-full max-w-[519px] flex flex-col gap-2 ">

            <Title headingType="h3" tagline={title} theme='light' />
            <p className="text-grey-dark text-base md:text-[20px] leading-[24px] md:leading-[28px]">
              {description}
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row gap-[10px] md:gap-[20px] md:justify-center lg:justify-end lg:items-center">
            <Link href={btn1?.href ?? ""} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="61"
                viewBox="0 0 187 61"
                fill="none"
              >
                <g clip-path="url(#clip0_593_59801)">
                  <path
                    d="M12.2857 60.4702C11.8042 60.4702 11.3343 60.4643 10.8566 60.4536C9.86684 60.4411 8.87949 60.3565 7.90249 60.2008C6.99153 60.0464 6.10903 59.7599 5.28414 59.3503C4.46682 58.9439 3.72133 58.4112 3.07627 57.7723C2.42188 57.1411 1.87707 56.409 1.46342 55.605C1.04522 54.7959 0.755806 53.9285 0.605248 53.033C0.442661 52.0709 0.354693 51.0981 0.342107 50.1232C0.332087 49.7958 0.31897 48.7057 0.31897 48.7057V12.8533C0.31897 12.8533 0.332941 11.7802 0.342186 11.4649C0.354237 10.4913 0.441695 9.51999 0.603795 8.55941C0.754629 7.66159 1.04427 6.79169 1.4627 5.97979C1.87482 5.17634 2.41661 4.44365 3.06706 3.81015C3.71677 3.17062 4.46463 2.63515 5.28336 2.22325C6.10638 1.81489 6.98718 1.53031 7.89631 1.37904C8.87648 1.22162 9.8673 1.1365 10.8605 1.12442L12.2865 1.10547H174.705L176.148 1.12518C177.132 1.13666 178.114 1.22102 179.086 1.37752C180.004 1.53069 180.894 1.81725 181.726 2.2278C183.366 3.05789 184.701 4.37116 185.543 5.9836C185.955 6.78989 186.24 7.65268 186.389 8.54276C186.553 9.51122 186.645 10.4902 186.663 11.4717C186.668 11.9113 186.668 12.3834 186.668 12.8533C186.68 13.4353 186.68 13.9892 186.68 14.5478V47.0295C186.68 47.5935 186.68 48.1435 186.668 48.6981C186.668 49.2031 186.668 49.6654 186.662 50.1412C186.643 51.1054 186.553 52.0668 186.392 53.0177C186.244 53.9198 185.956 54.7938 185.538 55.6099C185.122 56.4051 184.58 57.1307 183.933 57.7605C183.288 58.4025 182.541 58.9383 181.722 59.3472C180.892 59.7603 180.003 60.0478 179.086 60.2008C178.109 60.3572 177.121 60.4418 176.131 60.4536C175.668 60.4643 175.184 60.4702 174.713 60.4702L173 60.4734L12.2857 60.4702Z"
                    fill="black"
                  />
                  <path
                    d="M38.0848 31.2543C38.1017 29.9589 38.452 28.6888 39.1032 27.562C39.7543 26.4354 40.6851 25.4887 41.8088 24.8102C41.0951 23.8089 40.1531 22.9849 39.0583 22.4036C37.9632 21.8223 36.7454 21.4997 35.5014 21.4614C32.8473 21.1879 30.2744 23.021 28.9221 23.021C27.5435 23.021 25.4613 21.4886 23.2191 21.5339C21.7687 21.5799 20.3553 21.9941 19.1165 22.736C17.8776 23.478 16.8556 24.5224 16.1499 25.7676C13.0934 30.9644 15.3733 38.6019 18.3012 42.8029C19.7661 44.8595 21.4782 47.1576 23.7183 47.0761C25.9105 46.9866 26.7292 45.7034 29.3754 45.7034C31.9969 45.7034 32.765 47.0761 35.0507 47.0241C37.4029 46.9866 38.8851 44.958 40.2984 42.8816C41.3511 41.416 42.1609 39.796 42.6982 38.082C41.3316 37.5142 40.1654 36.5643 39.345 35.35C38.5245 34.1359 38.0862 32.7115 38.0848 31.2543Z"
                    fill="white"
                  />
                  <path
                    d="M33.7677 18.6988C35.0502 17.1868 35.682 15.2434 35.5289 13.2812C33.5697 13.4833 31.7596 14.403 30.4598 15.857C29.8242 16.5673 29.3374 17.3937 29.0273 18.2888C28.7171 19.184 28.5897 20.1304 28.6522 21.074C29.6323 21.0839 30.6019 20.8752 31.488 20.4638C32.3741 20.0524 33.1535 19.4489 33.7677 18.6988Z"
                    fill="white"
                  />
                  <path
                    d="M65.7951 41.8684H58.3143L56.5175 47.0777H53.3491L60.435 27.8047H63.7267L70.8126 47.0777H67.5901L65.7951 41.8684ZM59.0889 39.4646H65.0188L62.0957 31.0103H62.0137L59.0889 39.4646Z"
                    fill="white"
                  />
                  <path
                    d="M86.1152 40.0552C86.1152 44.4217 83.7355 47.2271 80.1439 47.2271C79.234 47.274 78.3294 47.068 77.5334 46.6334C76.7369 46.1985 76.0816 45.5523 75.6418 44.7689H75.5739V51.7285H72.6367V33.0285H75.4799V35.3657H75.534C75.9939 34.5858 76.6602 33.943 77.4627 33.5056C78.2648 33.0681 79.1729 32.8525 80.0899 32.8815C83.7213 32.8815 86.1152 35.7006 86.1152 40.0552ZM83.0963 40.0552C83.0963 37.2103 81.5993 35.3399 79.3153 35.3399C77.071 35.3399 75.5616 37.2495 75.5616 40.0552C75.5616 42.8863 77.071 44.7824 79.3153 44.7824C81.5993 44.7824 83.0963 42.9259 83.0963 40.0552Z"
                    fill="white"
                  />
                  <path
                    d="M101.864 40.0552C101.864 44.4217 99.484 47.2271 95.8925 47.2271C94.9826 47.2739 94.078 47.0679 93.2815 46.6334C92.4855 46.1985 91.8301 45.5523 91.3903 44.7689H91.3225V51.7285H88.3853V33.0285H91.2284V35.3656H91.2822C91.7421 34.5858 92.4088 33.9429 93.2108 33.5055C94.0133 33.0681 94.9211 32.8524 95.8384 32.8815C99.4699 32.8815 101.864 35.7005 101.864 40.0552ZM98.8449 40.0552C98.8449 37.2102 97.3478 35.3399 95.0635 35.3399C92.8195 35.3399 91.3101 37.2494 91.3101 40.0552C91.3101 42.8863 92.8195 44.7824 95.0635 44.7824C97.3478 44.7824 98.8449 42.9258 98.8449 40.0552Z"
                    fill="white"
                  />
                  <path
                    d="M112.272 41.7089C112.49 43.6199 114.381 44.875 116.964 44.875C119.44 44.875 121.221 43.6199 121.221 41.8965C121.221 40.4007 120.147 39.5049 117.603 38.891L115.06 38.2893C111.456 37.4347 109.783 35.7797 109.783 33.0938C109.783 29.7685 112.734 27.4844 116.924 27.4844C121.071 27.4844 123.914 29.7685 124.01 33.0938H121.045C120.867 31.1704 119.248 30.0094 116.882 30.0094C114.516 30.0094 112.897 31.1841 112.897 32.8937C112.897 34.2563 113.931 35.0581 116.461 35.6718L118.623 36.1931C122.65 37.1285 124.323 38.7169 124.323 41.5359C124.323 45.1418 121.398 47.3999 116.747 47.3999C112.394 47.3999 109.456 45.1948 109.266 41.7086L112.272 41.7089Z"
                    fill="white"
                  />
                  <path
                    d="M130.662 29.7031V33.0284H133.383V35.3125H130.662V43.059C130.662 44.2625 131.207 44.8233 132.403 44.8233C132.727 44.8177 133.049 44.7955 133.37 44.7563V47.027C132.832 47.1255 132.285 47.1702 131.738 47.1601C128.841 47.1601 127.711 46.0919 127.711 43.3666V35.3125H125.631V33.0284H127.711V29.7031H130.662Z"
                    fill="white"
                  />
                  <path
                    d="M134.959 40.0549C134.959 35.6337 137.611 32.8555 141.746 32.8555C145.894 32.8555 148.534 35.6337 148.534 40.0549C148.534 44.488 145.908 47.2543 141.746 47.2543C137.585 47.2543 134.959 44.488 134.959 40.0549ZM145.541 40.0549C145.541 37.022 144.125 35.232 141.746 35.232C139.366 35.232 137.952 37.0355 137.952 40.0549C137.952 43.0997 139.366 44.8761 141.746 44.8761C144.125 44.8761 145.541 43.0997 145.541 40.0549Z"
                    fill="white"
                  />
                  <path
                    d="M150.954 33.0284H153.756V35.42H153.824C154.013 34.6731 154.459 34.013 155.086 33.5506C155.712 33.0883 156.482 32.852 157.265 32.8813C157.604 32.8802 157.942 32.9163 158.272 32.989V35.6869C157.844 35.5586 157.399 35.4996 156.952 35.5124C156.525 35.4954 156.1 35.5693 155.705 35.7292C155.31 35.8887 154.955 36.1305 154.665 36.4378C154.374 36.7447 154.154 37.1099 154.021 37.5084C153.887 37.9069 153.843 38.3286 153.892 38.7455V47.0799H150.954V33.0284Z"
                    fill="white"
                  />
                  <path
                    d="M171.813 42.9527C171.418 45.5035 168.889 47.2543 165.652 47.2543C161.489 47.2543 158.906 44.5154 158.906 40.1216C158.906 35.7138 161.503 32.8555 165.529 32.8555C169.487 32.8555 171.977 35.5262 171.977 39.7865V40.7746H161.871V40.9491C161.824 41.4662 161.89 41.9871 162.064 42.4772C162.238 42.9676 162.517 43.4157 162.881 43.7923C163.245 44.1686 163.686 44.4648 164.176 44.6608C164.665 44.8567 165.192 44.9483 165.72 44.9292C166.414 44.993 167.11 44.8352 167.706 44.479C168.301 44.1228 168.764 43.5877 169.024 42.9527H171.813ZM161.885 38.7589H169.038C169.065 38.2938 168.993 37.8287 168.827 37.3921C168.662 36.9558 168.406 36.5576 168.077 36.2226C167.747 35.8879 167.351 35.6237 166.912 35.4462C166.474 35.269 166.003 35.1826 165.529 35.1926C165.05 35.1898 164.576 35.2801 164.134 35.4581C163.691 35.6361 163.289 35.8987 162.95 36.2302C162.611 36.5618 162.342 36.9558 162.16 37.39C161.977 37.8239 161.883 38.2893 161.885 38.7589Z"
                    fill="white"
                  />
                  <path
                    d="M58.7209 13.2996C59.3367 13.2562 59.9546 13.3475 60.5301 13.567C61.1056 13.7865 61.6242 14.1287 62.0487 14.5689C62.4733 15.0091 62.7928 15.5364 62.9848 16.1126C63.1767 16.6888 63.2358 17.2997 63.1583 17.9011C63.1583 20.8596 61.5301 22.5602 58.7209 22.5602H55.3149V13.2996H58.7209ZM56.7795 21.2506H58.5576C58.9973 21.2764 59.4378 21.2056 59.8464 21.0432C60.2551 20.8808 60.6216 20.631 60.9193 20.312C61.2173 19.993 61.4389 19.6127 61.5683 19.1989C61.6977 18.7851 61.7316 18.3482 61.6673 17.9199C61.727 17.4934 61.6896 17.0592 61.5584 16.6484C61.4269 16.2377 61.2049 15.8605 60.9076 15.544C60.6103 15.2275 60.2455 14.9795 59.839 14.8177C59.4328 14.6559 58.9952 14.5844 58.5576 14.6083H56.7795V21.2506Z"
                    fill="white"
                  />
                  <path
                    d="M64.813 19.0636C64.7681 18.6044 64.8215 18.141 64.97 17.7032C65.1184 17.2654 65.3581 16.8629 65.6741 16.5215C65.9902 16.1801 66.3751 15.9073 66.805 15.7206C67.2345 15.534 67.6993 15.4375 68.1691 15.4375C68.6389 15.4375 69.1034 15.534 69.5329 15.7206C69.9628 15.9073 70.3477 16.1801 70.6638 16.5215C70.9798 16.8629 71.2198 17.2654 71.3679 17.7032C71.5164 18.141 71.5698 18.6044 71.5252 19.0636C71.5708 19.5234 71.5178 19.9874 71.37 20.4259C71.2219 20.8643 70.9823 21.2676 70.6662 21.6097C70.3502 21.9518 69.9645 22.2251 69.5347 22.4122C69.1045 22.5993 68.6393 22.6959 68.1691 22.6959C67.6986 22.6959 67.2334 22.5993 66.8032 22.4122C66.3734 22.2251 65.9877 21.9518 65.6717 21.6097C65.3556 21.2676 65.116 20.8643 64.9682 20.4259C64.8201 19.9874 64.7674 19.5234 64.813 19.0636ZM70.0805 19.0636C70.0805 17.5487 69.3876 16.6629 68.1712 16.6629C66.9506 16.6629 66.2638 17.5487 66.2638 19.0636C66.2638 20.5907 66.9506 21.4697 68.1712 21.4697C69.3876 21.4697 70.0805 20.5846 70.0805 19.0636Z"
                    fill="white"
                  />
                  <path
                    d="M80.447 22.559H78.9899L77.519 17.4118H77.408L75.9435 22.559H74.5001L72.5386 15.5703H73.9632L75.2379 20.9031H75.3429L76.806 15.5703H78.1535L79.6166 20.9031H79.7276L80.9963 15.5703H82.4008L80.447 22.559Z"
                    fill="white"
                  />
                  <path
                    d="M84.051 15.5715H85.4028V16.6817H85.5078C85.686 16.2829 85.9861 15.9487 86.3668 15.7255C86.7475 15.5023 87.1897 15.4013 87.6316 15.4366C87.9777 15.411 88.3255 15.4623 88.649 15.5866C88.9721 15.7109 89.263 15.9051 89.4995 16.1547C89.736 16.4043 89.9124 16.7031 90.0156 17.0287C90.1185 17.3543 90.1457 17.6986 90.0948 18.0359V22.5601H88.6903V18.3823C88.6903 17.2592 88.1933 16.7007 87.1547 16.7007C86.9197 16.6899 86.6849 16.7292 86.4665 16.8158C86.2484 16.9025 86.0518 17.0344 85.8906 17.2026C85.7291 17.3709 85.6068 17.5714 85.5315 17.7904C85.4565 18.0095 85.4304 18.2419 85.4555 18.4717V22.5601H84.051V15.5715Z"
                    fill="white"
                  />
                  <path d="M92.333 12.8438H93.7374V22.5606H92.333V12.8438Z" fill="white" />
                  <path
                    d="M95.6899 19.0638C95.6454 18.6045 95.6988 18.141 95.8472 17.7032C95.9954 17.2655 96.2354 16.8629 96.5514 16.5215C96.8674 16.1801 97.2527 15.9073 97.6822 15.7206C98.1121 15.534 98.5766 15.4375 99.0464 15.4375C99.5162 15.4375 99.981 15.534 100.411 15.7206C100.84 15.9073 101.226 16.1801 101.542 16.5215C101.858 16.8629 102.097 17.2655 102.246 17.7032C102.394 18.141 102.448 18.6045 102.403 19.0638C102.448 19.5235 102.396 19.9875 102.248 20.426C102.1 20.8645 101.86 21.2678 101.544 21.6098C101.228 21.9519 100.842 22.2253 100.412 22.4123C99.9821 22.5994 99.5169 22.696 99.0464 22.696C98.5762 22.696 98.111 22.5994 97.6808 22.4123C97.2506 22.2253 96.8653 21.9519 96.5493 21.6098C96.2329 21.2678 95.9932 20.8645 95.8455 20.426C95.6974 19.9875 95.6443 19.5235 95.6899 19.0638ZM100.958 19.0638C100.958 17.5489 100.265 16.663 99.0485 16.663C97.8275 16.663 97.1407 17.5489 97.1407 19.0638C97.1407 20.5908 97.8275 21.4699 99.0485 21.4699C100.265 21.4699 100.958 20.5847 100.958 19.0638Z"
                    fill="white"
                  />
                  <path
                    d="M103.881 20.5846C103.881 19.3266 104.835 18.6014 106.528 18.4984L108.456 18.3892V17.786C108.456 17.0479 107.959 16.6311 106.999 16.6311C106.215 16.6311 105.672 16.9137 105.516 17.4079H104.156C104.299 16.2074 105.449 15.4375 107.064 15.4375C108.848 15.4375 109.854 16.3098 109.854 17.786V22.5611H108.502V21.5789H108.391C108.165 21.9312 107.849 22.2184 107.473 22.4112C107.098 22.604 106.677 22.6954 106.253 22.6762C105.955 22.7067 105.652 22.6754 105.367 22.5843C105.081 22.4932 104.818 22.3443 104.595 22.1473C104.371 21.9502 104.192 21.7093 104.07 21.4402C103.946 21.1711 103.883 20.8796 103.881 20.5846ZM108.456 19.9875V19.4032L106.718 19.5123C105.738 19.5767 105.293 19.9041 105.293 20.5202C105.293 21.1492 105.849 21.5152 106.613 21.5152C106.837 21.5375 107.063 21.5153 107.278 21.45C107.493 21.3846 107.692 21.2775 107.864 21.135C108.036 20.9925 108.177 20.8174 108.279 20.6203C108.38 20.4231 108.441 20.2079 108.456 19.9875Z"
                    fill="white"
                  />
                  <path
                    d="M111.7 19.0632C111.7 16.8549 112.856 15.456 114.654 15.456C115.099 15.4359 115.541 15.5405 115.927 15.7576C116.313 15.9747 116.629 16.2954 116.837 16.6821H116.942V12.8438H118.346V22.5606H117V21.4564H116.889C116.665 21.8405 116.339 22.1572 115.945 22.3721C115.551 22.587 115.105 22.692 114.654 22.6757C112.844 22.6758 111.7 21.2768 111.7 19.0632ZM113.151 19.0632C113.151 20.5455 113.863 21.4375 115.053 21.4375C116.236 21.4375 116.968 20.5327 116.968 19.0693C116.968 17.6127 116.229 16.695 115.053 16.695C113.87 16.695 113.151 17.593 113.151 19.0632Z"
                    fill="white"
                  />
                  <path
                    d="M124.157 19.0636C124.112 18.6044 124.166 18.141 124.314 17.7032C124.462 17.2654 124.702 16.8629 125.018 16.5215C125.334 16.1801 125.719 15.9073 126.149 15.7206C126.578 15.534 127.043 15.4375 127.513 15.4375C127.983 15.4375 128.447 15.534 128.877 15.7206C129.307 15.9073 129.692 16.1801 130.008 16.5215C130.324 16.8629 130.564 17.2654 130.712 17.7032C130.86 18.141 130.914 18.6044 130.869 19.0636C130.915 19.5234 130.862 19.9874 130.714 20.4259C130.566 20.8643 130.326 21.2676 130.01 21.6097C129.694 21.9518 129.309 22.2251 128.879 22.4122C128.448 22.5993 127.983 22.6959 127.513 22.6959C127.043 22.6959 126.577 22.5993 126.147 22.4122C125.717 22.2251 125.332 21.9518 125.016 21.6097C124.7 21.2676 124.46 20.8643 124.312 20.4259C124.164 19.9874 124.111 19.5234 124.157 19.0636ZM129.424 19.0636C129.424 17.5487 128.732 16.6629 127.515 16.6629C126.295 16.6629 125.608 17.5487 125.608 19.0636C125.608 20.5907 126.295 21.4697 127.515 21.4697C128.732 21.4697 129.424 20.5846 129.424 19.0636Z"
                    fill="white"
                  />
                  <path
                    d="M132.753 15.5715H134.106V16.6817H134.211C134.388 16.2829 134.689 15.9487 135.07 15.7255C135.45 15.5023 135.892 15.4013 136.334 15.4366C136.68 15.411 137.028 15.4623 137.351 15.5866C137.675 15.7109 137.965 15.9051 138.202 16.1547C138.439 16.4043 138.615 16.7031 138.718 17.0287C138.821 17.3543 138.848 17.6986 138.797 18.0359V22.5601H137.393V18.3823C137.393 17.2592 136.896 16.7007 135.857 16.7007C135.622 16.6899 135.387 16.7292 135.169 16.8158C134.951 16.9025 134.755 17.0344 134.593 17.2026C134.432 17.3709 134.309 17.5714 134.234 17.7904C134.159 18.0095 134.133 18.2419 134.158 18.4717V22.5601H132.753V15.5715Z"
                    fill="white"
                  />
                  <path
                    d="M146.733 13.832V15.6038H148.275V16.7656H146.733V20.3592C146.733 21.0912 147.041 21.4118 147.74 21.4118C147.919 21.4112 148.098 21.4006 148.275 21.38V22.5288C148.023 22.5731 147.768 22.5967 147.511 22.5993C145.949 22.5993 145.328 22.0597 145.328 20.7123V16.7655H144.198V15.6038H145.328V13.832H146.733Z"
                    fill="white"
                  />
                  <path
                    d="M150.194 12.8438H151.586V16.695H151.697C151.884 16.2925 152.193 15.9564 152.581 15.7324C152.969 15.5083 153.419 15.4073 153.868 15.4431C154.212 15.4247 154.556 15.4811 154.876 15.6085C155.196 15.7358 155.483 15.9309 155.717 16.1797C155.951 16.4286 156.126 16.7251 156.23 17.0481C156.334 17.3711 156.364 17.7127 156.318 18.0485V22.5606H154.912V18.3887C154.912 17.2724 154.383 16.7071 153.391 16.7071C153.149 16.6877 152.906 16.7203 152.679 16.8026C152.452 16.8849 152.246 17.015 152.075 17.1838C151.905 17.3526 151.773 17.5559 151.691 17.7796C151.609 18.0033 151.577 18.242 151.599 18.4789V22.5605H150.194V12.8438Z"
                    fill="white"
                  />
                  <path
                    d="M164.507 20.6742C164.316 21.3129 163.903 21.8654 163.339 22.235C162.775 22.6046 162.097 22.7678 161.423 22.6961C160.955 22.7082 160.489 22.62 160.058 22.4376C159.627 22.2552 159.242 21.9829 158.929 21.6397C158.617 21.2965 158.384 20.8906 158.247 20.4501C158.11 20.0096 158.072 19.5451 158.136 19.0888C158.074 18.6311 158.112 18.1656 158.249 17.7238C158.385 17.282 158.617 16.8742 158.928 16.528C159.239 16.1818 159.623 15.9052 160.052 15.7171C160.482 15.529 160.947 15.4337 161.417 15.4376C163.397 15.4376 164.592 16.7662 164.592 18.9607V19.442H159.567V19.5193C159.545 19.7757 159.578 20.0339 159.663 20.2772C159.748 20.5205 159.885 20.7435 160.063 20.932C160.242 21.1205 160.459 21.2703 160.699 21.3718C160.94 21.4733 161.2 21.5242 161.462 21.5214C161.798 21.561 162.138 21.5016 162.44 21.3507C162.741 21.1998 162.99 20.9643 163.155 20.6741L164.507 20.6742ZM159.567 18.4219H163.161C163.179 18.1874 163.147 17.9518 163.066 17.7303C162.985 17.5088 162.859 17.3063 162.693 17.1358C162.529 16.9653 162.329 16.8305 162.108 16.7402C161.887 16.65 161.649 16.6061 161.41 16.6115C161.167 16.6085 160.926 16.6533 160.7 16.7432C160.476 16.8332 160.271 16.9664 160.1 17.1351C159.928 17.3039 159.792 17.5046 159.7 17.7256C159.609 17.9466 159.564 18.1834 159.567 18.4219Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_593_59801">
                    <rect width="187" height="60" fill="white" transform="translate(0 0.789062)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href={btn2?.href ?? ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="56"
                viewBox="0 0 187 56"
                fill="none"
              >
                <g clip-path="url(#clip0_593_59690)">
                  <path
                    d="M179.988 55.5H6.9226C3.11517 55.5 0 52.4064 0 48.625V7.375C0 3.59375 3.11517 0.5 6.9226 0.5H179.988C183.795 0.5 186.91 3.59375 186.91 7.375V48.625C186.91 52.4064 183.795 55.5 179.988 55.5Z"
                    fill="#100F0D"
                  />
                  <path
                    d="M113.413 9.81641V18.1964H112.424L107.826 11.6168H107.743V18.1964H106.722V9.81641H107.71L112.325 16.4124H112.407V9.81641H113.413Z"
                    fill="white"
                  />
                  <path
                    d="M105.004 14.0077C105.004 14.8915 104.843 15.6553 104.522 16.2991C104.201 16.9429 103.76 17.4393 103.2 17.7885C102.639 18.1377 101.999 18.3123 101.28 18.3123C100.56 18.3123 99.9199 18.1377 99.3596 17.7885C98.799 17.4393 98.3584 16.9429 98.0369 16.2991C97.7154 15.6553 97.5547 14.8915 97.5547 14.0077C97.5547 13.1239 97.7154 12.3601 98.0369 11.7163C98.3584 11.0725 98.799 10.5761 99.3596 10.2269C99.9199 9.8777 100.56 9.70312 101.28 9.70312C101.999 9.70312 102.639 9.8777 103.2 10.2269C103.76 10.5761 104.201 11.0725 104.522 11.7163C104.843 12.3601 105.004 13.1239 105.004 14.0077ZM104.015 14.0077C104.015 13.2821 103.893 12.6697 103.648 12.1705C103.407 11.6713 103.078 11.2935 102.664 11.0371C102.252 10.7806 101.79 10.6524 101.28 10.6524C100.769 10.6524 100.306 10.7806 99.8911 11.0371C99.479 11.2935 99.1507 11.6713 98.9061 12.1705C98.6645 12.6697 98.5436 13.2821 98.5436 14.0077C98.5436 14.7333 98.6645 15.3457 98.9061 15.8449C99.1507 16.3441 99.479 16.7219 99.8911 16.9783C100.306 17.2348 100.769 17.363 101.28 17.363C101.79 17.363 102.252 17.2348 102.664 16.9783C103.078 16.7219 103.407 16.3441 103.648 15.8449C103.893 15.3457 104.015 14.7333 104.015 14.0077Z"
                    fill="white"
                  />
                  <path
                    d="M86.7166 10.7166V9.81641H93.0451V10.7166H90.3915V18.1964H89.3698V10.7166H86.7166Z"
                    fill="white"
                  />
                  <path d="M85.1281 9.81641V18.1964H84.1064V9.81641H85.1281Z" fill="white" />
                  <path
                    d="M72.9373 10.7166V9.81641H79.2658V10.7166H76.6125V18.1964H75.5909V10.7166H72.9373Z"
                    fill="white"
                  />
                  <path
                    d="M66.4656 18.1964V9.81641H71.5581V10.7166H67.4876V13.5481H71.2945V14.4483H67.4876V17.2962H71.6239V18.1964H66.4656Z"
                    fill="white"
                  />
                  <path
                    d="M63.6116 12.4364C63.5209 12.1609 63.4015 11.9141 63.253 11.6958C63.1074 11.4749 62.933 11.2867 62.7298 11.1312C62.5295 10.9757 62.3015 10.857 62.0458 10.7752C61.7905 10.6933 61.5103 10.6524 61.2054 10.6524C60.7055 10.6524 60.2509 10.7806 59.8417 11.0371C59.4325 11.2935 59.107 11.6713 58.8653 12.1705C58.6233 12.6697 58.5025 13.2821 58.5025 14.0077C58.5025 14.7333 58.6248 15.3457 58.8693 15.8449C59.1138 16.3441 59.4447 16.7219 59.8622 16.9783C60.2797 17.2348 60.7494 17.363 61.2712 17.363C61.7549 17.363 62.1806 17.2607 62.5485 17.0561C62.9193 16.8488 63.2077 16.5569 63.4138 16.1804C63.6227 15.8013 63.727 15.3553 63.727 14.8424L64.0402 14.9079H61.502V14.0077H64.7159V14.9079C64.7159 15.5981 64.5674 16.1982 64.2707 16.7083C63.9769 17.2184 63.5702 17.6139 63.0513 17.8949C62.5349 18.1732 61.9415 18.3123 61.2712 18.3123C60.5243 18.3123 59.8676 18.1377 59.3019 17.7885C58.7388 17.4393 58.2993 16.9429 57.9836 16.2991C57.6703 15.6553 57.5139 14.8915 57.5139 14.0077C57.5139 13.3448 57.6031 12.7488 57.7815 12.2196C57.9627 11.6877 58.2184 11.2348 58.5478 10.8611C58.8776 10.4874 59.2678 10.2009 59.718 10.0018C60.1686 9.8027 60.6641 9.70312 61.2054 9.70312C61.6506 9.70312 62.0652 9.76995 62.4496 9.90362C62.8369 10.0346 63.1818 10.2214 63.4839 10.4642C63.7888 10.7043 64.0427 10.9921 64.2459 11.3276C64.4495 11.6604 64.5893 12.03 64.6663 12.4364H63.6116Z"
                    fill="white"
                  />
                  <path
                    d="M148.056 41.7514H150.639V24.5617H148.056V41.7514ZM171.325 30.7541L168.364 38.2064H168.275L165.201 30.7541H162.419L167.029 41.1696L164.4 46.9639H167.094L174.198 30.7541H171.325ZM156.673 39.7989C155.828 39.7989 154.648 39.3785 154.648 38.3392C154.648 37.0124 156.118 36.5039 157.386 36.5039C158.521 36.5039 159.057 36.7467 159.746 37.0785C159.546 38.671 158.166 39.7989 156.673 39.7989ZM156.986 30.378C155.115 30.378 153.178 31.1966 152.377 33.0099L154.669 33.9606C155.16 33.0099 156.072 32.7006 157.03 32.7006C158.366 32.7006 159.725 33.496 159.746 34.9118V35.0885C159.279 34.8232 158.276 34.4252 157.052 34.4252C154.58 34.4252 152.064 35.7738 152.064 38.2949C152.064 40.5949 154.091 42.0767 156.361 42.0767C158.098 42.0767 159.057 41.3028 159.657 40.3957H159.746V41.7235H162.242V35.1325C162.242 32.0807 159.946 30.378 156.986 30.378ZM141.02 32.8466H137.345V26.9546H141.02C142.951 26.9546 144.047 28.5423 144.047 29.9005C144.047 31.2326 142.951 32.8466 141.02 32.8466ZM140.953 24.5617H134.763V41.7514H137.345V35.239H140.953C143.816 35.239 146.631 33.1807 146.631 29.9005C146.631 26.621 143.816 24.5617 140.953 24.5617ZM107.197 39.8021C105.412 39.8021 103.918 38.3174 103.918 36.2803C103.918 34.2195 105.412 32.7139 107.197 32.7139C108.959 32.7139 110.341 34.2195 110.341 36.2803C110.341 38.3174 108.959 39.8021 107.197 39.8021ZM110.163 31.7166H110.074C109.494 31.0301 108.378 30.4098 106.974 30.4098C104.029 30.4098 101.33 32.9798 101.33 36.2803C101.33 39.5585 104.029 42.106 106.974 42.106C108.378 42.106 109.494 41.4853 110.074 40.7771H110.163V41.6182C110.163 43.8564 108.959 45.0521 107.018 45.0521C105.435 45.0521 104.453 43.9224 104.052 42.9699L101.799 43.9003C102.445 45.4503 104.163 47.356 107.018 47.356C110.052 47.356 112.617 45.5835 112.617 41.2635V30.7643H110.163V31.7166ZM114.402 41.7514H116.988V24.5617H114.402V41.7514ZM120.803 36.0806C120.736 33.8209 122.566 32.6694 123.881 32.6694C124.908 32.6694 125.777 33.1791 126.068 33.9096L120.803 36.0806ZM128.833 34.1308C128.342 32.8246 126.848 30.4098 123.792 30.4098C120.758 30.4098 118.238 32.78 118.238 36.2578C118.238 39.5364 120.736 42.106 124.081 42.106C126.78 42.106 128.342 40.4671 128.989 39.5142L126.982 38.1849C126.312 39.1599 125.398 39.8021 124.081 39.8021C122.766 39.8021 121.829 39.2039 121.227 38.0299L129.1 34.7958L128.833 34.1308ZM66.103 32.2042V34.6851H72.0805C71.9022 36.0806 71.4339 37.0996 70.7201 37.8085C69.8498 38.6721 68.489 39.6249 66.103 39.6249C62.4223 39.6249 59.5454 36.6789 59.5454 33.0238C59.5454 29.3688 62.4223 26.4223 66.103 26.4223C68.0881 26.4223 69.5377 27.1978 70.6086 28.1947L72.3711 26.4443C70.8762 25.0268 68.8915 23.9414 66.103 23.9414C61.0612 23.9414 56.8235 28.0175 56.8235 33.0238C56.8235 38.0299 61.0612 42.106 66.103 42.106C68.8239 42.106 70.8762 41.2196 72.4819 39.5585C74.1325 37.9192 74.646 35.6154 74.646 33.7544C74.646 33.1791 74.6007 32.6474 74.5119 32.2042H66.103ZM81.442 39.8021C79.6573 39.8021 78.1181 38.3403 78.1181 36.2578C78.1181 34.1534 79.6573 32.7139 81.442 32.7139C83.2261 32.7139 84.7652 34.1534 84.7652 36.2578C84.7652 38.3403 83.2261 39.8021 81.442 39.8021ZM81.442 30.4098C78.1843 30.4098 75.5307 32.8686 75.5307 36.2578C75.5307 39.6249 78.1843 42.106 81.442 42.106C84.6984 42.106 87.3527 39.6249 87.3527 36.2578C87.3527 32.8686 84.6984 30.4098 81.442 30.4098ZM94.3357 39.8021C92.552 39.8021 91.0125 38.3403 91.0125 36.2578C91.0125 34.1534 92.552 32.7139 94.3357 32.7139C96.1205 32.7139 97.6593 34.1534 97.6593 36.2578C97.6593 38.3403 96.1205 39.8021 94.3357 39.8021ZM94.3357 30.4098C91.0794 30.4098 88.4258 32.8686 88.4258 36.2578C88.4258 39.6249 91.0794 42.106 94.3357 42.106C97.5931 42.106 100.247 39.6249 100.247 36.2578C100.247 32.8686 97.5931 30.4098 94.3357 30.4098Z"
                    fill="white"
                  />
                  <path
                    d="M28.6839 27.207L13.9436 42.7445C13.9442 42.7477 13.9453 42.7505 13.9458 42.7537C14.3979 44.4409 15.9495 45.683 17.7911 45.683C18.5272 45.683 19.2184 45.4855 19.8111 45.1384L19.8582 45.1109L36.4503 35.6026L28.6839 27.207Z"
                    fill="#EB3131"
                  />
                  <path
                    d="M43.5968 24.5634L43.5824 24.5537L36.4193 20.4297L28.3491 27.5615L36.4473 35.6031L43.5727 31.52C44.822 30.8503 45.67 29.5424 45.67 28.0341C45.67 26.5368 44.8335 25.2353 43.5968 24.5634Z"
                    fill="#F6B60B"
                  />
                  <path
                    d="M13.9426 13.2578C13.8539 13.5823 13.8074 13.9222 13.8074 14.2752V41.7305C13.8074 42.083 13.8534 42.424 13.9431 42.7472L29.1907 27.6073L13.9426 13.2578Z"
                    fill="#5778C5"
                  />
                  <path
                    d="M28.7931 27.9992L36.4227 20.4243L19.8494 10.8815C19.247 10.5232 18.5439 10.3164 17.7916 10.3164C15.9501 10.3164 14.3964 11.5609 13.9442 13.2501C13.9436 13.2518 13.9436 13.2528 13.9436 13.2544L28.7931 27.9992Z"
                    fill="#3BAD49"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_593_59690">
                    <rect width="187" height="55" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnquirySec
