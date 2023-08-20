import { MemberCategory } from "../../../models/enums/MemberCategory";
import { MinMax } from "../../common/MinMax";

export interface IPmcConfig 
{
    /** What game version should the PMC have */
    gameVersionWeight: Record<string, number>
    /** What account type should the PMC have */
    accountTypeWeight: Record<MemberCategory, number>
    /** Global whitelist/blacklist of vest loot for PMCs */
    vestLoot: SlotLootSettings
    /** Global whitelist/blacklist of pocket loot for PMCs */
    pocketLoot: SlotLootSettings
    /** Global whitelist/blacklist of backpack loot for PMCs */
    backpackLoot: SlotLootSettings
    dynamicLoot: DynamicLoot
    /** Use difficulty defined in config/bot.json/difficulty instead of chosen difficulty dropdown value */
    useDifficultyOverride: boolean
    /** Difficulty override e.g. "AsOnline/Hard" */
    difficulty: string
    /** Chance out of 100 to have a complete gun in backpack */
    looseWeaponInBackpackChancePercent: number
    /** Chance out of 100 to have an enhancement applied to PMC weapon */
    weaponHasEnhancementChancePercent: number
    /** MinMax count of weapons to have in backpack */
    looseWeaponInBackpackLootMinMax: MinMax
    /** Percentage chance PMC will be USEC */
    isUsec: number
    /** WildSpawnType enum value USEC PMCs use */
    usecType: string
    /** WildSpawnType enum value BEAR PMCs use */
    bearType: string
    chanceSameSideIsHostilePercent: number
    /** What 'brain' does a PMC use, keyed by map and side (USEC/BEAR) key: map location, value: type for usec/bear */
    pmcType: Record<string, Record<string, Record<string, number>>>
    maxBackpackLootTotalRub: number
    maxPocketLootTotalRub: number
    maxVestLootTotalRub: number
    /** Percentage chance a bot from a wave is converted into a PMC, key = bot wildspawn tpye (assault/exusec), value: min+max chance to be converted */
    convertIntoPmcChance: Record<string, MinMax>
    /** WildSpawnType bots PMCs should see as hostile */
    enemyTypes: string[]
    /** How many levels above player level can a PMC be */
    botRelativeLevelDeltaMax: number
    /** Force a number of healing items into PMCs secure container to ensure they can heal */
    forceHealingItemsIntoSecure: boolean
    addPrefixToSameNamePMCAsPlayerChance: number
    allPMCsHavePlayerNameWithRandomPrefixChance: number
}

export interface PmcTypes
{
    usec: string
    bear: string
}

export interface SlotLootSettings 
{
    whitelist: string[]
    blacklist: string[]
    moneyStackLimits: Record<string, number>
}

export interface DynamicLoot 
{
    moneyStackLimits: Record<string, number>
}