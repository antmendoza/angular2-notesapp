"use strict"

export interface FormComponent {
    nameSubmitForm(): string;
    onSubmit(): void;
    noteInitialized(): boolean;
}