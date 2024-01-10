//#region imports
import { useEffect } from "react";
import { Tabs } from "nextra/components";
//#endregion

export interface ExampleProps {}

export interface State {}

export default function Example(props: ExampleProps) {
  const {} = props;

  useEffect(() => {}, []);

  const titleClassName = "font-semibold text-lg py-1 px-4 border-b";
  return (
    <div className="my-24 border rounded divide-y">
      <div className="p-6">
        <Tabs items={["Project Structure", "Environment Configuration"]}>
          <Tabs.Tab>
            **pnpm**: Fast, disk space efficient package manager.
          </Tabs.Tab>
          <Tabs.Tab>
            **npm** is a package manager for the JavaScript programming
            language.
            <Tabs items={["Servers", "Authorization", "Variable Groups"]}>
              <Tabs.Tab>
                **pnpm**: Fast, disk space efficient package manager.
              </Tabs.Tab>
              <Tabs.Tab>
                **pnpm**: Fast, disk space efficient package manager.
              </Tabs.Tab>
            </Tabs>
          </Tabs.Tab>
        </Tabs>
      </div>
      <div>
        <div className={titleClassName}>Project Structure</div>
        <div className="p-4 grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => {
            return (
              <div className="border shadow-sm p-3 rounded">service {i}</div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={titleClassName}>Project Environment Configuration</div>
        <div>Servers</div>
        <div>Authorizations</div>
        <div>Variable Groups</div>
        <div></div>
      </div>
    </div>
  );
}
