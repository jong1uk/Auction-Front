import React from "react";

import { Tabs, TabsList, TabPanel, Tab } from "@mui/base";
import BookmarkProduct from "pages/user/mypage/BookmarkProduct";
import "styles/bookmark.css";

const MypageBookmark = () => {
    return (
        <div className="container"> 
            <div className="mypage-tab buying">
                <Tabs defaultValue={1}>
                    <TabsList className="bookmark-tab">
                        <Tab value={1}>
                            <span className="bookmark-tab-span">관심 상품</span>
                        </Tab>
                        <Tab value={2}>
                            <span>관심 스타일</span>
                        </Tab>
                    </TabsList>
                    <TabPanel value={1}><BookmarkProduct /></TabPanel>
                    <TabPanel value={2}>Second page</TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default MypageBookmark;