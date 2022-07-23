import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectorContainer } from "./style";

type Props = {
  value: number
  onChange?: (quantity: number) => void
}

export function QuantitySelector({ onChange, value }: Props) {
  function handleStepDown() {
    onChange?.(value > 1 ? value - 1 : 1)
  }

  function handleStepUp() {
    onChange?.(value + 1)
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    let value = parseInt(event.target.value)
    
    if(!value) {
      value = 1
    }

    onChange?.(value)
  }

  return (
    <SelectorContainer>
      <button onClick={handleStepDown}>
        <Minus />
      </button>
      <input type="number" name="quantity" value={value} onChange={handleInput} />
      <button onClick={handleStepUp}>
        <Plus />
      </button>
    </SelectorContainer>
  )
}