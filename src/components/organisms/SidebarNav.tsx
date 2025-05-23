import Analytics from '../../assets/Analytics.svg';
import Lucy from '../../assets/avatars/Lucy.png';
import Calendar from '../../assets/Calendar.svg';
import Home from '../../assets/Home.svg';
import Lightning from '../../assets/Lightning.svg';
import Logomark from '../../assets/Logomark.svg';
import Notifications from '../../assets/Notifications.svg';
import People from '../../assets/People.svg';
import Settings from '../../assets/Settings.svg';

//TODO Refactor/improve!

export const SidebarNav = () => {
    return (
        <div className="h-full w-[80px] px-[16px] py-[24px]">
            <div className="flex h-full w-[48px] flex-col justify-between">
                <div className="flex flex-col items-center justify-around gap-[16px]">
                    <img className="mb-[16px]" src={Logomark} width={46} alt="Logo mark" />
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Home} alt="Home" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Analytics} alt="Analytics" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={People} alt="People" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Calendar} alt="Calendar" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Lightning} alt="Lightning" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Notifications} alt="Notifications" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Settings} alt="Settings" />
                    </div>
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        <img src={Lucy} alt="Avatar photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
