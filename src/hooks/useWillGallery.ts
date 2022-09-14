import {useEffect, useState} from 'react';
import { HTTP } from "@awesome-cordova-plugins/http";


export interface UserWill {
    id: number;
    desc: string;
    img: string;
    creater: string;
    createPortrait: string;
    mark: string;
    createTime: number;
    updateTime: number;
    status: {
        icon: string,
        state: string,
        color: string
    };
}

export function useWillGallery() {
    const [wills, setWills] = useState<UserWill[]>([]);

    useEffect(() => {
        const loadWills = async () => {
            HTTP.get("https://github.com/search?p=6&q=ionic+app&type=Repositories", {}, {})
                .then(data => {
                    console.log(data.data);
                }).catch(error => {
                setWills([
                    {
                        desc: "吃二火锅",
                        img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyt.jumiw.com%2Fdata%2Fattachment%2Fforum%2F202102%2F16%2F214525y1qq2iiik9lhh13i.JPG-watermark&refer=http%3A%2F%2Fyt.jumiw.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665306688&t=03041863c3d2603be1ad4b0c9dc00543",
                        creater: "马吉盒",
                        createPortrait: "https://avatars.githubusercontent.com/u/1734093?s=64&v=4",
                        mark: "我爱二火锅",
                        createTime: 12,
                        updateTime: 12,
                        status: {
                            icon: "smile-o",
                            state: "完成",
                            color: "lightgreen"
                        },
                    },{
                        desc: "SKII",
                        img: "https://imgcache.dealmoon.com/fsvrugccache.dealmoon.com/ugc/a34/259/674/8b3dcffa6d993c0ff3989da.jpg_1080_1080_2_30ae.jpg",
                        creater: "马吉盒",
                        createPortrait: "https://avatars.githubusercontent.com/u/1734093?s=64&v=4",
                        mark: "限量版神仙水",
                        createTime: 12,
                        updateTime: 12,
                        status: {
                            icon: "meh-o",
                            state: "待实现",
                            color: "orange"
                        },
                    },{
                        desc: "iphone14",
                        img: "https://t15.baidu.com/it/u=119209285,3699871265&fm=224&app=112&size=h200&n=0&f=JPEG&fmt=auto?sec=1662829200&t=6d243c5555e492325925bcbf88debff4",
                        creater: "黄锋",
                        createPortrait: "https://avatars.githubusercontent.com/u/27766791?s=40&v=4",
                        mark: "新手机真香",
                        createTime: 12,
                        updateTime: 12,
                        status: {
                            icon: "frown-o",
                            state: "不实现",
                            color: "danger"
                        },
                    }
                ] as UserWill[])
            })
        };
        loadWills();
    }, []);

    return {
        wills
    };
}
