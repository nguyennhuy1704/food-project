import React from 'react';
import { Card, Row, Col, Image, Input, Space, Button } from 'antd';

const FormInputFood = ({ dataInPut, setDataInput, handleSubmit }) => {
    console.log('🚀 ~ file: FormInputFood.js ~ line 5 ~ FormInputFood ~ dataInPut', dataInPut);

    const hanleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDataInput({ ...dataInPut, [name]: value });
    };

    return (
        <Row justify="center">
            <Card className="card_food" style={{ width: 600 }}>
                <h1>{dataInPut.isEdit ? 'Sửa đồ ăn' : 'Thêm đồ ăn'}</h1>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Input name="img" value={dataInPut.img} onChange={hanleChangeInput} placeholder="Ảnh" />
                    <Input name="title" value={dataInPut.title} onChange={hanleChangeInput} placeholder="Tên món ăn" />
                    <Input
                        name="description"
                        value={dataInPut.description}
                        onChange={hanleChangeInput}
                        placeholder="Địa chỉ"
                    />
                    <Input
                        name="voucher"
                        value={dataInPut.voucher}
                        onChange={hanleChangeInput}
                        placeholder="Giảm giá"
                    />
                    <Button onClick={handleSubmit}>{dataInPut.isEdit ? 'Sửa' : 'Thêm'}</Button>
                </Space>
            </Card>
        </Row>
    );
};

export default FormInputFood;
