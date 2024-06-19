interface IProps {
  fill: string
}

export const EyeSvg = ({ fill }: IProps) => (
  <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 0.75C5.98755 0.75 0.976562 6.4873 0.976562 6.4873L0.512695 7L0.976562 7.5127C0.976562 7.5127 5.54504 12.722 11.6211 13.2012C11.911 13.2378 12.2009 13.25 12.5 13.25C12.7991 13.25 13.089 13.2378 13.3789 13.2012C19.455 12.722 24.0234 7.5127 24.0234 7.5127L24.4873 7L24.0234 6.4873C24.0234 6.4873 19.0125 0.75 12.5 0.75ZM12.5 2.3125C14.2212 2.3125 15.8081 2.78247 17.1875 3.41113C17.6849 4.23511 17.9688 5.1842 17.9688 6.21875C17.9688 9.04163 15.8508 11.361 13.1104 11.6631C13.0951 11.6661 13.0768 11.66 13.0615 11.6631C12.8754 11.6722 12.6892 11.6875 12.5 11.6875C12.2925 11.6875 12.0911 11.6753 11.8896 11.6631C9.14917 11.361 7.03125 9.04163 7.03125 6.21875C7.03125 5.19946 7.30591 4.25037 7.78809 3.43555H7.76367C9.15527 2.79468 10.7605 2.3125 12.5 2.3125ZM12.5 3.875C11.2061 3.875 10.1562 4.9248 10.1562 6.21875C10.1562 7.5127 11.2061 8.5625 12.5 8.5625C13.7939 8.5625 14.8438 7.5127 14.8438 6.21875C14.8438 4.9248 13.7939 3.875 12.5 3.875ZM5.66406 4.60742C5.54199 5.13232 5.46875 5.66028 5.46875 6.21875C5.46875 7.58899 5.85938 8.87073 6.54297 9.9541C4.57458 8.8158 3.2074 7.45776 2.75879 7C3.13416 6.61548 4.18091 5.59619 5.66406 4.60742ZM19.3359 4.60742C20.8191 5.59619 21.8658 6.61548 22.2412 7C21.7926 7.45776 20.4254 8.8158 18.457 9.9541C19.1406 8.87073 19.5312 7.58899 19.5312 6.21875C19.5312 5.66028 19.458 5.12622 19.3359 4.60742Z"
      fill={fill}
    />
  </svg>
)
