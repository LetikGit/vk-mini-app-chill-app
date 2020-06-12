import React, { useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import SoundSelector from '../components/SoundSelector'



const Home = ({ id }) => {

	const soundList = [
		{
			name: 'Дождь',
			icon: 'rain',
			sound: 'rain',
			initVolume: 0
		},
		{
			name: 'Огонь',
			icon: 'fire',
			sound: 'fire',
			initVolume: 0
		},
		{
			name: 'Пляж',
			icon: 'beach',
			sound: 'beach',
			initVolume: 0
		},
		{
			name: 'Птицы',
			icon: 'bird',
			sound: 'birds',
			initVolume: 0
		},
		{
			name: '"Коричневый шум"',
			icon: 'brownnoise',
			sound: 'brownnoise',
			initVolume: 0
		},
		{
			name: 'Мурлыканье кота',
			icon: 'catpurr',
			sound: 'cat_purr',
			initVolume: 0
		},
		{
			name: 'Капли',
			icon: 'drop',
			sound: 'drops',
			initVolume: 0
		},
		{
			name: 'Лес',
			icon: 'forest',
			sound: 'forest',
			initVolume: 0
		},
		{
			name: 'Листва',
			icon: 'leaves',
			sound: 'leaves',
			initVolume: 0
		},
		{
			name: '"Розовый шум"',
			icon: 'pinknoise',
			sound: 'pinknoise',
			initVolume: 0
		},
		{
			name: 'Река',
			icon: 'river',
			sound: 'river',
			initVolume: 0
		},
		{
			name: 'Овцы',
			icon: 'sheep',
			sound: 'sheep',
			initVolume: 0
		},
		{
			name: 'Гром',
			icon: 'thunder',
			sound: 'thunder',
			initVolume: 0
		},
		{
			name: 'Колокольчики',
			icon: 'windchimes',
			sound: 'windchimes',
			initVolume: 0
		},
	]

	const [soundData, setSoundData] = useState(soundList)

	function controlVolume(mute) {
		const soundMix = soundData.map((item, i) => (
			{
				...item,
				initVolume: Math.random() > 0.5 || mute ? 0 : Math.floor(Math.random() * Math.floor(100))
			}
		))
		setSoundData(soundMix)
	}

	return (
		<Panel id={id}>
			<PanelHeader>Chill App</PanelHeader>
			<Div>
				<Button size="xl" onClick={() => controlVolume(false)}>Случайные звуки</Button>
			</Div>
			<Div>
				<Button size="xl" mode="destructive" onClick={() => controlVolume(true)}>Заглушить всё</Button>
			</Div>
			{
				soundData.map((item, index) => (
					<SoundSelector
						key={index.toString()}
						name={item.name}
						icon={item.icon}
						sound={item.sound}
						initVolume={item.initVolume}
					/>
				))
			}
		</Panel>
	)
};

export default Home;
