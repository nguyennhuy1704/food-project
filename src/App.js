import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/global/Footer';
import Header from './components/global/Header';
import MainPage from './pages/MainPage';
import { Col, Row } from 'antd';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header isActive="abde" />
            </header>
            <div className="main_page">
                <Row justify="center">
                    <Col span={23}>
                        <MainPage />
                    </Col>
                </Row>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
