import { describe, test  } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { render, screen } from "@testing-library/react";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        render(<ItemCounter name={"Test item"} />);

        screen.debug();
    })
})

