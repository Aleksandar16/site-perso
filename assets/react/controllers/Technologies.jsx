import React from 'react';
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel, Tooltip, Button} from '@material-tailwind/react';

const Technologies = (props) => {
    let data;

    try {
        data = JSON.parse(props.technologies);
    } catch (e) {
        console.error("Erreur de parsing JSON:", e);
        return <p>Erreur de chargement des technologies.</p>;
    }

    const tabs = [
        {
            label: "Back End",
            value: "backend",
            desc: data.filter(technology => technology.type === "backend")
        },
        {
            label: "Front End",
            value: "frontend",
            desc: data.filter(technology => technology.type === "frontend")
        },
        {
            label: "Outils",
            value: "tools",
            desc: data.filter(technology => technology.type === "tools")
        },
    ];

    return (
        <Tabs value="backend" className={`max-h-[80%] p-6 lg:p-24`}>
            <TabsHeader className={`bg-gray-900`}>
                {tabs.map(tab => (
                    <Tab key={tab.value} value={tab.value} className={`bg-gray-900 text-amber-700 text-xl min-h-[70px]`}>
                        {tab.label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className={`bg-white rounded-md p-1 m-1 lg:min-h-[36rem]`}
                      animate={{
                          initial: { y: 250 },
                          mount: { y: 0 },
                          unmount: { y: 250 },
                      }}
            >
                {tabs.map(tab => (
                    <TabPanel key={tab.value} value={tab.value} className="py-0">
                        <div className={`grid grid-cols-2 p-1 gap-2 lg:gap-8 lg:grid-cols-5 place-items-center lg:p-3`}>
                            {tab.desc.map((tech, index) => (
                                <div key={index} className={`m-2 p-2`}>
                                    <Tooltip content={tech.name} placement="bottom">
                                        <a href={tech.link} target={`_blank`}>
                                            <img src={tech.image} className={`w-20 h-20 lg:w-28 lg:h-28`}  alt={'image'}/>
                                        </a>
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

export default Technologies;
