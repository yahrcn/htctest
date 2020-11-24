import React from "react";
import ChannelsItem from "./ChannelsItem";

import "../main.css";
import { channelsList } from "./channelsList";

const Channels = () => {
    return (
        <section className="index-channels">
            {channelsList.map((item, id) => (
                <ChannelsItem
                    title={item.title}
                    logo={item.logo}
                    schedule={item.schedule}
                    key={id}
                />
            ))}
        </section>
    );
};

export default Channels;
