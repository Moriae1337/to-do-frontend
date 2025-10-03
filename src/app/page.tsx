"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TaskSearch from "@/components/TaskSearch";
import TaskList from "@/components/TaskList";
import TaskFormModal from "@/components/TaskFormModal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";
import * as styles from "@/styles/page";
export default function HomePage() {
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const handleTaskCreated = () => setRefresh((prev) => prev + 1);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Container className="max-w-2xl w-full">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-3xl">Welcome to ToDoApp</CardTitle>
              <CardDescription>
                Manage your tasks efficiently and stay productive.
              </CardDescription>
            </CardHeader>

            <Separator className="my-4" />

            <CardContent className="space-y-6">
              <TaskSearch search={search} onSearchChange={setSearch} />
              <TaskFormModal onTaskCreated={handleTaskCreated} />
              <TaskList key={refresh} search={search} />
            </CardContent>
          </Card>
        </Container>
      </main>
    </>
  );
}
