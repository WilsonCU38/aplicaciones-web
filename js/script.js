class Display {
    constructor(element) {
        this.element = element;
    }

    setValue(value) {
        this.element.value = value;
    }

    getValue() {
        return this.element.value;
    }

    clear() {
        this.element.value = "";
    }
}

class Calculator {
    calculate(expression) {
        try {
            return eval(expression);
        }
        catch {
            return "Error";
        }
    }
}

class CalculatorController {
    constructor(display, calculator) {
        this.display = display;
        this.calculator = calculator;
    }

    addInput(value) {
        this.display.setValue(this.display.getValue() + value);
    }

    clear() {
        this.display.clear();
    }

    execute() {
        const result = this.calculator.calculate(this.display.getValue());
        this.display.setValue(result);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById("pantalla");
    const display = new Display(pantalla);
    const calculator = new Calculator();
    const controller = new CalculatorController(display, calculator);

    document.querySelectorAll("button[data-value]").forEach(btn => {
        btn.addEventListener("click", () => controller.addInput(btn.dataset.value));
    });

    document.getElementById("clear").addEventListener("click", () => controller.clear());
    document.getElementById("igual").addEventListener("click", () => controller.execute());
})