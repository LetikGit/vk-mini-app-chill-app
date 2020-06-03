import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import '@vkontakte/vkui/dist/vkui.css'
import './css/main.css'

import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	}, [])


	return (
		<Root activeView="view">
			<View id="view" activePanel={activePanel}>
				<Home id='home' />
			</View>
		</Root>
	);
}

export default App;

