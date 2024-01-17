export type VaccineType = {
    id: number,
    title: string,
    observation: string,
    status: string,
    scheduledDate: string,
    applicationDate: string,
    phaseId?: number,
}