import React from 'react'; 
import { PanelHeader, Panel } from '@vkontakte/vkui';
import "./Style.css"

const Home = ({ id, go, fetchedUser }) => (

<Panel id={id} >
	<PanelHeader separator={true} 
 >
  Карточка сотрудника
	</PanelHeader>
	</Panel>
);
 

export default Home;
