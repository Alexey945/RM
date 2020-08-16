import React from 'react';
import { ConfigProvider, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui'; 
import Home from './panels/Home'
import Home1 from './panels/Home1'
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28StatisticsOutline from '@vkontakte/icons/dist/28/statistics_outline';



const App = () => {
  const [schema]=React.useState('bright_light')
  const [activeStory,changeActiveStory]=React.useState('feed')
  const [tabbar]=React.useState(true)
  const [user]=React.useState(null)
  const [achivments] = React.useState([])
  const onStoryChange = (e) => {
    const a = e.currentTarget.dataset.story;
    changeActiveStory(a?a:'feed')
  }
  const go = (e) => {
    const a = e.currentTarget.dataset.to;
    changeActiveStory(prev=>a!==undefined?a:prev)
  }

  return (
    <ConfigProvider isWebView={true} scheme={schema}>
      <Epic activeStory={activeStory} tabbar={tabbar&&
        <Tabbar style={{visibility: 'hidden'}}>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'feed'}
            data-story="feed"
          ><Icon28StatisticsOutline /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'notifications'}
            data-story="notifications"
            
          ><Icon28Profile /></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="home">
          <Home id="home" fetchedUser={user} go={go} />
        </View>
        <View id="notifications" activePanel="home">
          <Home1 id="home" fetchedUser={user} go={go} achivments={achivments} />
        </View>
      </Epic>
    </ConfigProvider>
  );
}
export default App;
 



