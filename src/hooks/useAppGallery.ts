import {useEffect, useState} from 'react';
import { HTTP } from "@awesome-cordova-plugins/http";


export interface UserApp {
    name: string;
    logo: string;
    source: {
        icon: string,
        name: string,
        color: string
    };
    url: string;
    mark: string;
    createTime: number;
    updateTime: number;
    status: string;
}

export function useAppGallery() {
    const [apps, setApps] = useState<UserApp[]>([]);

    useEffect(() => {
        const loadApps = async () => {
            HTTP.get("https://github.com/search?p=6&q=ionic+app&type=Repositories", {}, {})
                .then(data => {
                    console.log(data.data);
                }).catch(error => {
                    setApps([{
                        name: "便签筒",
                        logo: "assets/app/note.svg",
                        source: {
                            icon: "windows",
                            name: 'windows',
                            color: 'primary'
                        },
                        url: "/tab3",
                        mark: "制作便签，投递到对方的便签筒中",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    }, {
                        name: "todos",
                        logo: "assets/app/todo.svg",
                        source: {
                            icon: "chrome",
                            name: 'chrome',
                            color: 'light'
                        },
                        url: "/tab3",
                        mark: "将来的某个时候，你也许可以着手去做",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    }, {
                        name: "许愿池",
                        logo: "assets/app/gift.svg",
                        source: {
                            icon: "appstore",
                            name: 'app',
                            color: 'warning'
                        },
                        url: "/wills",
                        mark: "早上睁开眼，它兴许就出现在你的床边",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    }, {
                        name: "目标",
                        logo: "assets/app/goal.svg",
                        source: {
                            icon: "android",
                            name: 'android',
                            color: 'danger'
                        },
                        url: "/tab3",
                        mark: "不要放弃，咸鱼也要有目标",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    }] as unknown as UserApp[])
                })
        };
        loadApps();
    }, []);

    return {
        apps
    };
}
