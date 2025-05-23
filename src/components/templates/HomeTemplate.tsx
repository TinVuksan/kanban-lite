import type { CategorizedTask } from '../../types/Task';
import { Header } from '../organisms/Header';
import { KanbanBoard } from '../organisms/KanbanBoard';
import { SidebarNavDesktop } from '../organisms/SidebarNavDesktop';
import { SidebarNavMobile } from '../organisms/SidebarNavMobile';
import { UpperNav } from '../organisms/UpperNav';

interface HomepageProps {
    data: CategorizedTask;
}

export const HomeTemplate = ({ data }: HomepageProps) => {
    return (
        <div className="bg-background flex h-screen w-screen flex-col overflow-hidden md:flex-row">
            <SidebarNavMobile />

            <div className="flex flex-1 overflow-hidden">
                <aside className="hidden shrink-0 md:block">
                    <SidebarNavDesktop />
                </aside>

                <div className="flex flex-1 flex-col overflow-hidden border-l-1 border-gray-200">
                    <UpperNav />
                    <main className="flex flex-col overflow-auto">
                        <Header />
                        <KanbanBoard initialData={data} />
                    </main>
                </div>
            </div>
        </div>
    );
};
