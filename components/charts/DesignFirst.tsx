//#region imports
import { useMemo } from "react";
import ReactFlow from "reactflow";
import RoleNode from "./RoleNode";
//#endregion

export interface DesignFirstProps {}

export interface State {}

export default function DesignFirst(props: DesignFirstProps) {
  const {} = props;

  const nodeTypes = useMemo(() => ({ roleNode: RoleNode }), []);

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-xl">Design First Workflow</div>
      {/* <p className="text-sm font-normal py-4 px-10">
        In the landscape of current API platforms, there's a noticeable trend
        towards a 'Code-First' approach. This methodology prioritizes the
        debugging of APIs before the creation of comprehensive documentation.
        While this approach has its merits in certain scenarios, it often leads
        to a significant drawback.
      </p> */}
      <div className="mt-8" style={{ width: 600, height: 460 }}>
        <ReactFlow
          contentEditable={false}
          zoomOnPinch={false}
          zoomOnScroll={false}
          maxZoom={1}
          minZoom={1}
          draggable={false}
          panOnDrag={false}
          nodeTypes={nodeTypes}
          nodes={[
            {
              id: "0",
              type: "roleNode",
              position: { x: 200, y: 160 },
              data: {
                role: "Design Contract",
                description: "Single source of truth for all stakeholders",
                className: "border-pink-500 bg-pink-50/50 dark:bg-pink-900",
                titleClassName: "border-b-pink-500",
              },
            },
            {
              id: "1",
              type: "roleNode",
              position: { x: 0, y: 0 },
              data: {
                role: "Backend",
                description:
                  "Quick design with AI support in just one or two days",
                ignoreTopHandle: true,
              },
            },
            {
              id: "2",
              type: "roleNode",
              position: { x: 0, y: 320 },
              data: {
                role: "QA",
                description:
                  "Give feedback with review and get started in one or two days",
                ignoreBottomHandle: true,
              },
            },
            {
              id: "3",
              type: "roleNode",
              position: { x: 400, y: 0 },
              data: {
                role: "Mobile Developers",
                description:
                  "Give feedback with review and get started in one or two days",
                ignoreTopHandle: true,
              },
            },
            {
              id: "4",
              type: "roleNode",
              position: { x: 400, y: 320 },
              data: {
                role: "Frontend Developers",
                description:
                  "Give feedback with review and get started in one or two days",
                ignoreBottomHandle: true,
              },
            },
          ]}
          edges={[
            {
              id: "e0-1",
              source: "1",
              target: "0",
              label: "Intelligent Design",
              animated: true,
              type: "smoothstep",
              sourceHandle: "c",
              targetHandle: "b",
              style: { stroke: "red" },
            },
            {
              id: "e2-0",
              source: "2",
              target: "0",
              // type: "floating",
              type: "smoothstep",
              label: "Waiting",
              sourceHandle: "a",

              targetHandle: "d",
              animated: true,
            },
            {
              id: "e3-0",
              source: "3",
              target: "0",
              // type: "floating",
              type: "smoothstep",
              label: "Waiting",
              sourceHandle: "c",
              targetHandle: "b",
              animated: true,
            },
            {
              id: "e4-0",
              source: "4",
              target: "0",
              // type: "floating",
              type: "smoothstep",
              label: "Waiting",
              sourceHandle: "a",
              targetHandle: "d",
              animated: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
