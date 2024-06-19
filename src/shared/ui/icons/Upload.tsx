interface IProps {
  fill: string
}

export const UploadSvg = ({ fill }: IProps) => (
  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 0.307617L6.93848 0.844727L1.46973 6.31348L2.59277 7.43652L6.71875 3.31055V16.25H8.28125V3.31055L12.4072 7.43652L13.5303 6.31348L8.06152 0.844727L7.5 0.307617ZM0.46875 17.8125V19.375H14.5312V17.8125H0.46875Z"
      fill={fill}
    />
  </svg>
)
