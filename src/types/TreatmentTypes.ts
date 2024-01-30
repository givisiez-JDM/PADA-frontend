export type TreatmentType = {
    treatmentId: number,
    allergies: string[],
    method: string[],
    active: boolean,
    patientId?: number,
}

export type PhaseType = {
    phaseId: number,
    phaseNumber: number,
    dosage: string[],
    frequency: string[],
    startTreatment: string,
    endTreatment: string,
    active: boolean,
}

export type VaccineType = {
    id: number,
    title: string,
    observation: string,
    status: string,
    scheduledDate: string,
    applicationDate: string,
    phaseId?: number,
}