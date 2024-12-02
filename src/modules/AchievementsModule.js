/*
 * This file is part of Playgama Bridge.
 *
 * Playgama Bridge is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * Playgama Bridge is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Playgama Bridge. If not, see <https://www.gnu.org/licenses/>.
 */

import ModuleBase from './ModuleBase'

class AchievementsModule extends ModuleBase {
    get isSupported() {
        return this._platformBridge.isAchievementsSupported
    }

    get isGetListSupported() {
        return this._platformBridge.isGetAchievementsListSupported
    }

    get isNativePopupSupported() {
        return this._platformBridge.isAchievementsNativePopupSupported
    }

    unlock(options) {
        if (options) {
            const platformDependedOptions = options[this._platformBridge.platformId]
            if (platformDependedOptions) {
                return this.unlock(platformDependedOptions)
            }
        }

        return this._platformBridge.unlockAchievement(options)
    }

    getList(options) {
        if (options) {
            const platformDependedOptions = options[this._platformBridge.platformId]
            if (platformDependedOptions) {
                return this.getList(platformDependedOptions)
            }
        }

        return this._platformBridge.getAchievementsList(options)
    }

    showNativePopup(options) {
        if (options) {
            const platformDependedOptions = options[this._platformBridge.platformId]
            if (platformDependedOptions) {
                return this.showNativePopup(platformDependedOptions)
            }
        }

        return this._platformBridge.showAchievementsNativePopup(options)
    }
}

export default AchievementsModule
