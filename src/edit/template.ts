// Hand coded :>

export interface Template {
    blocks: Block[]
}

export type ItemType = 'txt' | 'num' | 'loc' | 'vec' | 'snd' | 'part' | 'pot' | 'var' | 'g_val'
export type VarScope = "saved" | "unsaved" | "local"
export type g_valSelection = "Selection" | "Default" | "Victim" | "Killer" | "Damager" | "Shooter" | "Projectile" | "LastEntity"

export type ID = "block" | "bracket" | "killable"
export type Inverted = "" | "NOT"
export type Target = "" | "AllPlayers" | "Victim" | "Shooter" | "Damager" | "Killer" | "Default" | "Selection"
export type Direction = "open" | "close"
export type BracketType = "norm" | "repeat"

export type BlockID = BlockActionID | BlockSubActionID | BlockDataID | "else";
export type BlockActionID = "event" | "player_action" | "entity_event" | "entity_action" | "set_var" | "game_action" | "repeat" | "control" | "select_obj" | "else";
export type BlockSubActionID = "if_entity" | "if_game" | "if_player" | "if_var";
export type BlockDataID = "func" | "call_func" | "process" | "start_process";

export interface Block {
    id: ID
    block: BlockID
    action?: string
    data?: string
    target?: Target
    subAction?: string
    inverted?: Inverted
    type?: BracketType
    direct?: Direction
    args: {items:Argument[]}
}

export interface Argument {
    item: Item;
    slot: number;
}


// Item Code ========================================================

export type Item = Number | Text | Variable | Location | Vector | Potion | Sound | GameValue | Particle | BlockTag

export interface Number {
    id: 'num';
    data: {
        name: string;
    }
}

export interface Text {
    id: 'txt';
    data: {
        name: string;
    }
}

export interface Variable {
    id: 'var'
    data: {
        name: string;
        scope: VarScope;
    }
}

export interface Location {
    id: 'loc';
    data: {
        isBlock: boolean;
        loc: {
            x: number
            y: number
            z: number
            pitch: number
            yaw: number
        }
    }
}

export interface Vector {
    id: 'vec';
    data: {
        x: number;
        y: number;
        z: number;
    }
}

export interface Potion {
    id: 'pot';
    data: {
        pot: string;
        dur: number;
        amp: number;
    }
}

export interface Sound {
    id: 'snd';
    data: {
        sound: string
        pitch: number
        vol: number
    }
}

export interface GameValue {
    id: 'g_val';
    data: {
        type: string;
        target: g_valSelection;
    }
}

export interface Particle {
    id: 'part';
    data: {
        particle: string
        cluster: {
            amount: number;
            horizontal: number;
            vertical: number;
        }
        data: {
            motionVariation?: number;
            x?: number;
            y?: number;
            z?: number;
            colorVariation?: number;
            rgb?: number;
            sizeVariation?: number;
            size?: number;
            material?: string;
        }
    }
}

export interface BlockTag {
    id: 'bl_tag';
    data: {
        option: string;
        tag: string;
        action: string;
        block: BlockID;
    }
}