import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar Component", () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
    });

    test("renders Home link", () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toBeInTheDocument();
    });
});
