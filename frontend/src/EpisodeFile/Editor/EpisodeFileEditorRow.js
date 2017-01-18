import React, { Component, PropTypes } from 'react';
import padNumber from 'Utilities/Number/padNumber';
import EpisodeQuality from 'Episode/EpisodeQuality';
import RelativeDateCellConnector from 'Components/Table/Cells/RelativeDateCellConnector';
import TableRow from 'Components/Table/TableRow';
import TableRowCell from 'Components/Table/Cells/TableRowCell';
import TableSelectCell from 'Components/Table/Cells/TableSelectCell';
import styles from './EpisodeFileEditorRow';

class EpisodeFileEditorRow extends Component {

  //
  // Render

  render() {
    const {
      episodeFileId,
      seriesType,
      seasonNumber,
      episodeNumber,
      absoluteEpisodeNumber,
      relativePath,
      airDateUtc,
      quality,
      isSelected,
      onSelectedChange
    } = this.props;

    return (
      <TableRow>
        <TableSelectCell
          id={episodeFileId}
          isSelected={isSelected}
          onSelectedChange={onSelectedChange}
        />

        <TableRowCell>
          {seasonNumber}x{padNumber(episodeNumber, 2)}

          {
            seriesType === 'anime' && !!absoluteEpisodeNumber &&
              <span className={styles.absoluteEpisodeNumber}>
                ({absoluteEpisodeNumber})
              </span>
          }
        </TableRowCell>

        <TableRowCell>
          {relativePath}
        </TableRowCell>

        <RelativeDateCellConnector
          date={airDateUtc}
        />

        <TableRowCell>
          <EpisodeQuality
            quality={quality}
          />
        </TableRowCell>
      </TableRow>
    );
  }

}

EpisodeFileEditorRow.propTypes = {
  episodeFileId: PropTypes.number.isRequired,
  seriesType: PropTypes.string.isRequired,
  seasonNumber: PropTypes.number.isRequired,
  episodeNumber: PropTypes.number.isRequired,
  absoluteEpisodeNumber: PropTypes.number,
  relativePath: PropTypes.string.isRequired,
  airDateUtc: PropTypes.string.isRequired,
  quality: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onSelectedChange: PropTypes.func.isRequired
};

export default EpisodeFileEditorRow;