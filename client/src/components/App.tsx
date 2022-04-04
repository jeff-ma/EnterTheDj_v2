import React from "react";
import { Route, Routes } from "react-router-dom";
import Browse from "../pages/Browse/Browse";
import Charts from "../pages/Charts/Charts";
import Discover from "../pages/Discover/Discover";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import Playlists from "../pages/Playlists/Playlists";
import Recent from "../pages/Recent/Recent";
import Top from "../pages/Top/Top";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Footer from "./layout/Footer/Footer";
import Player from "./layout/Player/Player";
import "./app.scss";

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/browse" element={<Browse/>}/>
                    <Route path="/charts" element={<Charts/>}/>
                    <Route path="/discover" element={<Discover/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
                    <Route path="/recent" element={<Recent/>}/>
                    <Route path="/top" element={<Top/>}/>
                </Routes>
                {/* filler text */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, pariatur, sunt quas saepe placeat deserunt autem dicta sit expedita labore maiores nemo quibusdam assumenda ipsam? Quisquam eligendi reiciendis delectus necessitatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, pariatur, sunt quas saepe placeat deserunt autem dicta sit expedita labore maiores nemo quibusdam assumenda ipsam? Quisquam eligendi reiciendis delectus necessitatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, pariatur, sunt quas saepe placeat deserunt autem dicta sit expedita labore maiores nemo quibusdam assumenda ipsam? Quisquam eligendi reiciendis delectus necessitatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, pariatur, sunt quas saepe placeat deserunt autem dicta sit expedita labore maiores nemo quibusdam assumenda ipsam? Quisquam eligendi reiciendis delectus necessitatibus?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aspernatur omnis placeat consequuntur nesciunt saepe quod id. Harum necessitatibus at quas obcaecati vero unde consequatur aliquam repellat aspernatur laudantium ab cum asperiores, laborum optio beatae qui sequi est? Voluptates aspernatur corporis eius earum fuga sunt enim sequi, accusantium ullam nulla ab odit, sint maiores mollitia numquam nostrum, hic ea. Dolorum sunt debitis vero, magnam doloremque repudiandae minus placeat labore amet exercitationem voluptates animi nam in pariatur culpa officiis eveniet odio qui sit excepturi soluta molestias! Facilis, eligendi nam. Necessitatibus nulla possimus architecto eaque suscipit quo vero maiores dolore cum eum iusto sunt in dolorem tempora, aspernatur modi, repellendus, quos explicabo! Sunt voluptatem animi quia, dolores praesentium libero nihil. Nostrum nemo dolores veritatis voluptates voluptate dolorum maxime reiciendis ipsa cupiditate optio! Dignissimos laborum nesciunt ducimus ullam dicta mollitia facere animi quis suscipit aliquam in perspiciatis nam obcaecati, perferendis non nobis porro consequuntur. Vero accusamus, architecto officia deleniti ullam dolorem suscipit? Ex atque dolore velit eius odit nesciunt inventore sequi minima cumque doloribus? Quis hic ducimus iste deserunt nostrum, voluptatum fuga voluptate incidunt? Laboriosam labore ut fugiat officiis. Fuga animi veniam sunt labore fugiat minima? Provident, nisi odit. Impedit perferendis itaque facere libero recusandae tempora, non sunt deleniti, molestias est excepturi ut, vero omnis. Cumque atque tenetur eos consequuntur earum ea eligendi, ipsa quibusdam magni impedit veritatis unde laborum soluta labore voluptate ullam ad, praesentium suscipit! Quam ex ratione ducimus saepe molestias quas provident modi pariatur commodi ipsa architecto, expedita culpa beatae delectus officia dolorum, adipisci impedit! Corrupti, eos dolore itaque cumque possimus sequi reprehenderit odit dolorem est sapiente saepe enim vel temporibus voluptatibus qui voluptatum! Impedit, temporibus totam, ex ab eum ut nemo dignissimos suscipit officia placeat, molestiae soluta inventore illum at aut nesciunt perferendis dolorem minima veritatis praesentium itaque sapiente! Culpa, nulla nesciunt? Ipsum, aut eaque fugit doloribus dolor voluptatum id eius exercitationem tempora enim est consectetur voluptas necessitatibus. Voluptatum eaque voluptatem animi voluptates porro atque maiores ipsa reprehenderit dolore numquam? In vero repudiandae culpa alias, minima aperiam dicta nemo, dignissimos excepturi autem provident incidunt quia facilis optio! Placeat distinctio rerum, aspernatur explicabo aperiam ab obcaecati quia non molestiae facilis sint quasi fugiat atque dolorum omnis id? Tempora, soluta libero quod iste nobis odio, fuga dolores porro tempore quaerat laborum ipsam aperiam id facere nemo deserunt. Facere, ducimus tempora! Ea eius dolorum minus. Maxime, ullam deserunt? Rerum eveniet possimus explicabo nihil perferendis distinctio quia id consequuntur facere. Aliquid eius cupiditate nihil! Cumque beatae provident blanditiis laudantium deleniti culpa praesentium exercitationem cupiditate, itaque quisquam explicabo veniam hic, optio facilis voluptatum nesciunt maiores ad aperiam, dolores nisi facere a asperiores incidunt. Aliquam tenetur iure voluptatem, velit officia animi nihil? Explicabo minima error magni nam eos dolorem quis nulla eum numquam ducimus temporibus optio dicta animi dolores modi cumque, sed sequi beatae ipsa voluptas reprehenderit? Distinctio non rem qui, nesciunt adipisci tenetur minus architecto sit reprehenderit quae exercitationem dolorem dolores saepe aspernatur soluta totam ducimus aut, maiores earum error enim praesentium. Eos, odio?</p>
            <Footer/>
            </main>
            <Player/>
        </>
    );
};

export default App;