export type AllergieType = ''
export type DosageType = '1:10' | '1:100' | '1:1.000'| '1:10.000'
export type FrequencyType =  '7 dias' | '2 semanas' | '3 semanas' | '4 semanas'

export type TreatmentType = {
    id: number,
    allergies: string[],
    method: string[],
    active: boolean,
    patientId?: number,
}

export type PhaseType = {
    id: number,
    phaseNumber: number,
    dosage: DosageType,
    frequency:  FrequencyType,
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