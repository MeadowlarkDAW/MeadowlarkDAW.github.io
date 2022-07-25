export interface Feature {
    title: string,
    text: string,
    svg: string,
}

export interface Milestone {
    name: string,
    description: string,
    expected: string,
    color: string,
    icon: string,
}

export interface Button {
    text: string,
    link: string,
    icon?: string
}

export interface Data {
    navbarButtons: Button[],
    mainContentButtons: Button[],
    mainContentSubtext: string,
    features: Feature[],
    roadmap: Milestone[]
}