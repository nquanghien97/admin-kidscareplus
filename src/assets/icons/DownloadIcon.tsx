interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function DownloadIcon(props: DownloadIconProps) {
  const {
    width,
    height,
    ...rest
  } = props;
  return (
    <svg {...rest} width={width} height={height} stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>


  );
}

export default DownloadIcon;