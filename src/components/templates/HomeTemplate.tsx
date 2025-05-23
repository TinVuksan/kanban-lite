import type { CategorizedTask } from '../../types/Task';
import { Header } from '../organisms/Header';
import { KanbanBoard } from '../organisms/KanbanBoard';
import { SidebarNav } from '../organisms/SidebarNav';
import { UpperNav } from '../organisms/UpperNav';

interface HomepageProps {
    data: CategorizedTask;
}

export const HomeTemplate = ({ data }: HomepageProps) => {
    return (
        <div className="bg-background flex h-screen w-screen overflow-hidden">
            {/*//* Side Navigation  */}
            <aside className="shrink-0">
                <SidebarNav />
            </aside>

            {/*//* Main layout */}
            <div className="flex flex-1 flex-col overflow-hidden border-l-1 border-gray-200">
                {/*//* Top Navigation */}
                <UpperNav />
                <main className="flex flex-col overflow-auto">
                    {/*//* Project Header */}
                    <section className="flex gap-[16px] border-b-1 border-gray-200 p-[32px]">
                        <Header />
                    </section>
                    {/*//* Kanban Board */}
                    <KanbanBoard initialData={data} />
                </main>
            </div>
        </div>
    );
};
