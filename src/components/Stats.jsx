import React from 'react'
import colors from '../utils/colors.json'

const Stats = ({ poke, color, id }) => {
    const maxStat = 255; // El valor máximo posible para una estadística de Pokémon

    return (
        <div className="base-stats" style={{ color: colors[color] }}>
            <div className="stats-container">
                <div className="stat-name">
                    <div>HP</div>
                    <div>Atk</div>
                    <div>Def</div>
                    <div>Sp. Atk</div>
                    <div>Sp. Def</div>
                    <div>Speed</div>
                </div>
                <div className="separator"></div>
                <div className="stat-values">
                    {poke.stats.map((stat, index) => (
                        <div key={index} className="stat">
                            <div className="stat-info">
                                <div className="stat-value">{stat.base_stat}</div>
                                <div className="progress-container">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${(stat.base_stat / maxStat) * 100}%`,
                                            backgroundColor: colors[color]
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stats