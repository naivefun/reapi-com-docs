import clsx from "clsx";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default function RoleNode({
  data: {
    ignoreBottomHandle,
    ignoreTopHandle,
    className,
    titleClassName,
    role,
    description,
  },
}: {
  data: {
    ignoreTopHandle?: boolean;
    ignoreBottomHandle?: boolean;
    className?: string;
    titleClassName?: string;
    role: string;
    description: string;
  };
}) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      {!ignoreTopHandle && (
        <>
          <Handle type="source" position={Position.Top} id="a" />
          <Handle type="target" position={Position.Top} id="b" />
        </>
      )}
      <div
        className={clsx([
          "border rounded text-center text-sm shadow-md",
          className,
        ])}
      >
        <div
          className={clsx(["px-4 py-1 border-b font-medium", titleClassName])}
        >
          {role}
        </div>
        <div className="p-4 text-xs w-44">{description}</div>
      </div>
      {!ignoreBottomHandle && (
        <>
          <Handle type="source" position={Position.Bottom} id="c" />
          <Handle type="target" position={Position.Bottom} id="d" />
        </>
      )}
    </>
  );
}
