import React, { useState, useEffect } from 'react';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import MultiPlayer from './MultiPlayer'




const SoundSelector = ({ name, icon, sound, initVolume }) => {
    
    const [volume, setVolume] = useState(initVolume)

    useEffect(() => {
        setVolume(initVolume)
      }, [initVolume]);

	return (
		<Div>
            <div className="sound-container">
                <img src={require(`../images/${icon}.png`)} width="80" height="80" className="sound-img" />
                <FormLayout style={{width: '100%'}}>
                <MultiPlayer
                    urls={[
                        `https://chillnsound.petrovicstefan.rs/sounds/${sound}.mp3`
                    ]}
                    volume={Number(volume) / 100}
                />
                    <Slider
                        min={0}
                        max={100}
                        value={Number(volume)}
                        onChange={value => setVolume(value)}
                        top={name}
                    />
                </FormLayout>
            </div>
        </Div>
	)
};


export default SoundSelector;
