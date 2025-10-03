"use client";

import * as Toolbar from "@radix-ui/react-toolbar";
import * as styles from "@/styles/header";

export default function Header() {
  return (
    <Toolbar.Root className={styles.rootToolbar}>
      <Toolbar.Button asChild>
        <h1 className="text-xl font-bold cursor-default">
          TODO Web Application
        </h1>
      </Toolbar.Button>
      <div className="flex gap-2"></div>
    </Toolbar.Root>
  );
}
