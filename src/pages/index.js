import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import FormInputFood from '../components/MainFood/FormInputFood';
import ListFood from '../components/MainFood/ListFood';
import './style.css';

const data = [
    {
        id: 1,
        img: 'https://images.foody.vn/res/g97/964973/prof/s280x175/file_restaurant_photo_9uvo_16052-e1b1cf7b-201113184413.jpeg',
        title: 'Phá Lấu Cô Mai - Tôn Đản',
        description: '266/77 Tôn Đản P. 4, Quận 4, TP. HCM',
        voucher: ' Giảm đến 7k',
    },
    {
        id: 2,
        img: 'https://images.foody.vn/res/g103/1024417/prof/s280x175/foody-upload-api-foody-mobile-hmzz-200520100244.jpg',
        title: 'Bếp Bà Muối - Ăn Vặt Online',
        description: '22121/77 Tôn Đản P. 4, Quận 4, TP. HCM',
        voucher: ' Giảm đến 10k',
    },
    {
        id: 3,
        img: 'https://images.foody.vn/res/g88/874963/prof/s280x175/file_restaurant_photo_biz6_16185-e5669a6a-210416230655.jpeg',
        title: 'Phá Lấu Cô Mai - Tôn Đản',
        description: '2121/77 Tôn Đản P. 4, Quận 4, TP. HCM',
        voucher: ' Giảm đến 17k',
    },

    {
        id: 4,
        img: 'https://images.foody.vn/res/g64/631595/prof/s280x175/foody-mobile-7-jpg-634-636379548850873289.jpg',
        title: 'Phá Lấu Cô Mai - Tôn Đản',
        description: '32112/77 Tôn Đản P. 4, Quận 4, TP. HCM',
        voucher: ' Giảm đến 77k',
    },
    {
        id: 5,
        img: 'https://images.foody.vn/res/g89/883850/prof/s280x175/foody-upload-api-foody-mobile-foody-upload-api-foo-190122104430.jpg',
        title: 'Phá Lấu Cô Mai - Tôn Đản',
        description: '266/77 Tôn Đản P. 4, Quận 4, TP. HCM',
        voucher: ' Giảm đến 71k',
    },
];

const initialState = {
    img: '',
    title: '',
    description: '',
    voucher: '',
    isEdit: false,
};
const HomePage = () => {
    const [dataFood, setDataFood] = useState(data);
    const [dataFoodSearch, setdataFoodSearch] = useState([]);

    const [dataInPut, setDataInput] = useState(initialState);

    const [valueSearch, setValueSearch] = useState('');
    useEffect(() => {
        if (!valueSearch) {
            setdataFoodSearch(false);
            return;
        }
        const cloneData = [...dataFood];
        const dataSearch = cloneData.filter((item) => item.title.toLowerCase().includes(valueSearch.toLowerCase()));
        if (dataSearch.length > 0) {
            setdataFoodSearch(dataSearch);
        } else {
            setdataFoodSearch(true);
        }
    }, [valueSearch]);

    const handleSubmit = () => {
        const cloneData = [...dataFood];
        if (!dataInPut.isEdit) {
            cloneData.push({ ...dataInPut, id: 6 + Math.random() });

            setDataFood(cloneData);
        } else {
            const filterDataNoEdit = cloneData.filter((item) => item.id !== dataInPut.id);
            const { isEdit, ...rest } = dataInPut;
            const dataEdit = [...filterDataNoEdit, rest].sort((a, b) => a.id - b.id);
            setDataFood(dataEdit);
        }

        setDataInput(initialState);
    };

    const handleEdit = (id) => {
        const cloneData = [...dataFood];

        const filterData = cloneData.filter((item) => item.id === id);
        setDataInput({ ...filterData[0], isEdit: true });
    };

    const handleDelete = (id) => {
        const cloneData = [...dataFood];

        const filterData = cloneData.filter((item) => item.id !== id);
        setDataFood(filterData);
    };

    return (
        <div className="home_food-page">
            <Row gutter={[16, 0]}>
                <Col span={8}>
                    <FormInputFood dataInPut={dataInPut} handleSubmit={handleSubmit} setDataInput={setDataInput} />
                </Col>
                <Col span={16}>
                    <ListFood
                        setValueSearch={setValueSearch}
                        data={dataFoodSearch.length > 0 || dataFoodSearch ? dataFoodSearch : dataFood}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;
