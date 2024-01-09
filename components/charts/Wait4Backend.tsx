//#region imports
import { useMemo } from "react";
import ReactFlow from "reactflow";
import RoleNode from "./RoleNode";
//#endregion

export interface Wait4BackendProps {}

export interface State {}

export default function Wait4Backend(props: Wait4BackendProps) {
  const {} = props;

  const nodeTypes = useMemo(() => ({ roleNode: RoleNode }), []);

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-xl">Code First Workflow</div>
      {/* <p className="text-sm font-normal py-4 px-10">
        In the landscape of current API platforms, there's a noticeable trend
        towards a 'Code-First' approach. This methodology prioritizes the
        debugging of APIs before the creation of comprehensive documentation.
        While this approach has its merits in certain scenarios, it often leads
        to a significant drawback.
      </p> */}
      <div className="mt-8" style={{ width: 600, height: 300 }}>
        <ReactFlow
          contentEditable={false}
          draggable={false}
          panOnDrag={false}
          zoomOnPinch={false}
          zoomOnScroll={false}
          maxZoom={1}
          minZoom={1}
          nodeTypes={nodeTypes}
          nodes={[
            {
              id: "1",
              type: "roleNode",
              position: { x: 200, y: 0 },
              data: {
                role: "Backend",
                description: "Take quite a few days to develop and deploy API",
                ignoreTopHandle: true,
              },
            },
            {
              id: "2",
              type: "roleNode",
              position: { x: 0, y: 160 },
              data: {
                role: "QA",
                description: "Wait for API and its documentation",
                ignoreBottomHandle: true,
              },
            },
            {
              id: "3",
              type: "roleNode",
              position: { x: 200, y: 160 },
              data: {
                role: "Mobile Developers",
                description: "Wait for API and its documentation",
                ignoreBottomHandle: true,
              },
            },
            {
              id: "4",
              type: "roleNode",
              position: { x: 400, y: 160 },
              data: {
                role: "Frontend Developers",
                description: "Wait for API and its documentation",
                ignoreBottomHandle: true,
              },
            },
          ]}
          edges={[
            {
              id: "e1-2",
              source: "1",
              target: "2",
              label: "Waiting",
              animated: true,
              sourceHandle: "c",
              targetHandle: "b",
            },
            {
              id: "e1-3",
              source: "1",
              target: "3",
              label: "Waiting",
              animated: true,
              sourceHandle: "c",
              targetHandle: "b",
            },
            {
              id: "e1-4",
              source: "1",
              target: "4",
              label: "Waiting",
              animated: true,
              sourceHandle: "c",
              targetHandle: "b",
            },
          ]}
        />
      </div>
    </div>
  );
}
