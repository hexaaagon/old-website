import SkeletonDefault from "react-loading-skeleton";

export function Skeleton(...options: any) {
  return (
    <SkeletonDefault
      baseColor={"#00000000"}
      highlightColor={"#848799"}
      {...options}
    />
  );
}

export function SkeletonFull(...options: any) {
  return (
    <SkeletonDefault
      baseColor={"#00000000"}
      highlightColor={"#848799"}
      className="h-full w-full"
      {...options}
    />
  );
}
