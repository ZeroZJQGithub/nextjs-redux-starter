import { Button, Col, Input, Row, Spin } from "antd";
import type { NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
import { 
    decrement, 
    increment, 
    incrementByAmount, 
    selectCounter,
    incrementAsync,
    incrementIfOdd
} from './counterSlice';
import styles from '../../styles/Counter.module.css'
import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

/**
 * step5: Use Typed Hooks in Components
 * @returns 
 */
const Counter: NextPage = () => {

    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <Spin spinning={counter.status === "loading"}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Button 
                            type="primary" 
                            aria-label="Increment value"
                            onClick={() => dispatch(increment())}
                        >
                            Increment
                        </Button>
                        <span style={{ padding: '0 20px' }}>{counter.value}</span>
                        <span style={{ padding: '0 20px' }}>{counter.status}</span>
                        <Button 
                            type="primary" 
                            aria-label="Decrement value"
                            onClick={() => dispatch(decrement())}
                        >
                            Increment
                        </Button>                    
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Input 
                            placeholder="increment amount"
                            value={incrementAmount}
                            onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <Button
                            type="primary"
                            aria-label="Increment amount"
                            onClick={() => dispatch(incrementByAmount(incrementValue))}
                        >
                            Add Amount
                        </Button>
                        <Button
                            type="default"
                            aria-label="Increment amount async"
                            onClick={() => dispatch(incrementAsync(incrementValue))}
                        >
                            Add Async
                        </Button>
                        <Button
                            type="default"
                            aria-label="Increment amount odd"
                            onClick={() => dispatch(incrementIfOdd(incrementValue))}
                        >
                            Add If Odd
                        </Button>
                    </Col>
                </Row>
            </Spin>
        </div>
    )
}

export default Counter