import Analytics from '../../assets/Analytics.svg';
import Lucy from '../../assets/avatars/Lucy.png';
import Calendar from '../../assets/Calendar.svg';
import Home from '../../assets/Home.svg';
import Lightning from '../../assets/Lightning.svg';
import Logomark from '../../assets/Logomark.svg';
import Notifications from '../../assets/Notifications.svg';
import People from '../../assets/People.svg';
import Settings from '../../assets/Settings.svg';

const navItems = [
    { icon: Home },
    { icon: Analytics },
    { icon: People },
    { icon: Calendar },
    { icon: Lightning },
    { icon: Notifications },
];

export const SidebarNavDesktop = () => {
    return (
        <div className="h-full w-[80px] px-[16px] py-[24px]">
            <div className="flex h-full w-[48px] flex-col justify-between">
                <div className="flex flex-col items-center justify-around gap-[16px]">
                    <img className="mb-[16px]" src={Logomark} width={46} alt="Logo mark" />

                    {navItems.map(({ icon }, index) => (
                        <div
                            key={index}
                            className="flex h-[48px] w-[48px] items-center justify-center"
                        >
                            <img src={icon} alt={'Nav icon'} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-[16px]">
                    <div
                        className="flex h-[48px] w-[48px] items-center justify-center"
                        title="Settings"
                    >
                        <img src={Settings} alt="Settings" />
                    </div>
                    <div
                        className="flex h-[48px] w-[48px] items-center justify-center"
                        title="Avatar"
                    >
                        <img src={Lucy} alt="Avatar photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
