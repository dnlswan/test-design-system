import './App.css';
import Button from './lib/components/button';
import YTSearch from './lib/components/YTSearch';
import YTVideoCard from './lib/components/YTVideoCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Test Text" />
        <YTSearch />
        <YTVideoCard
          VideoURL={"#"}
          ThumbIMG={"https://i.ytimg.com/vi/JzpUfRv45yY/hqdefault.jpg"}
          VideoTitle="The Worst Hot Takes in Tech"
          VideoDuration={"14:30"}
          ViewCount={"1.6M"}
          Timestamp={"a day ago"}
          ChannelName={"Marques Brownlee"}
          ChannelAvatar={
            "https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s176-c-k-c0x00ffffff-no-rj-mo"
          }
        />
      </header>
    </div>
  );
}

export default App;