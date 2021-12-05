import React from 'react';
import { Card, Row, Col, Image, Button, Input } from 'antd';
import './style.css';
const ListFood = (props) => {
    const handleChangeSearch = (e) => {
        props.setValueSearch(e.target.value);
    };

    return (
        <Row justify="center">
            <Card className="card_food" style={{ width: 600 }}>
                <Row justify="space-between" align="middle">
                    <h1>Ưu đãi</h1>
                    <Input
                        onChange={handleChangeSearch}
                        placeholder="Nhập tên món ăn"
                        style={{ width: '340px', height: '33px' }}
                    />
                </Row>
                <Row gutter={[16, 16]}>
                    {props.data && props.data.length > 0 ? (
                        props.data.map((item) => (
                            <Col key={item.id} span={8}>
                                <Card
                                    className="card_food"
                                    style={{ overflow: 'hidden' }}
                                    size="small"
                                    actions={[<span>{item.voucher}</span>]}
                                >
                                    <Image style={{ width: '100%', height: '100%' }} src={item.img} />
                                    <h2 className="title_food">{item.title}</h2>
                                    <span className="desc_food">{item.description}</span>
                                </Card>
                                <Row justify="space-around" style={{ marginTop: '6px' }}>
                                    <Button onClick={() => props.handleEdit(item.id)} type="primary">
                                        Sửa
                                    </Button>
                                    <Button onClick={() => props.handleDelete(item.id)}>Xóa</Button>
                                </Row>
                            </Col>
                        ))
                    ) : (
                        <span>Không có món ăn nào!</span>
                    )}
                </Row>
            </Card>
        </Row>
    );
};

export default ListFood;
