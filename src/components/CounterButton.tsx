import React, { FC } from 'react'

interface Props {
    amount: number,
    handler: (amount: number) => void
}

const CounterButton: FC<Props> = ({amount, handler}) => {
    return (
        <button data-testid="iconBtn" onClick={() => handler(amount)}>
            {
                amount > 0 ? `+${amount}` : amount
            }
        </button>
    ) 
}

export default CounterButton