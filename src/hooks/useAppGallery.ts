import {useEffect, useState} from 'react';
import { HTTP } from "@awesome-cordova-plugins/http";


export interface UserApp {
    name: string;
    logo: string;
    source: string;
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
                        logo: "https://img1.baidu.com/it/u=4115766668,2129832410&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1662829200&t=9df92c91adafb9f48ff477134a534025",
                        source: "self",
                        url: "/tab3",
                        mark: "制作便签，投递到对方的便签筒中",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    },{
                        name: "todos",
                        logo: "https://img2.baidu.com/it/u=196886747,3117386503&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1662829200&t=2b6c87f34b73ccea7766fbf78bce72e8",
                        source: "self",
                        url: "/tab3",
                        mark: "将来的某个时候，你也许可以着手去做",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    },{
                        name: "许愿池",
                        logo: "https://img2.baidu.com/it/u=590033607,955699733&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500",
                        source: "self",
                        url: "/wills",
                        mark: "某一天早上睁开眼，它兴许就出现在你的床边",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    },{
                        name: "目标",
                        logo: "https://img0.baidu.com/it/u=197765000,1555229110&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1662829200&t=c2c5a583363b760fd3ba5fd202059d7d",
                        source: "self",
                        url: "/tab3",
                        mark: "咸鱼也要有目标",
                        createTime: 1212,
                        updateTime: 1212,
                        status: "normal",
                    }] as UserApp[])
                })
        };
        loadApps();
    }, []);

    return {
        apps
    };
}
