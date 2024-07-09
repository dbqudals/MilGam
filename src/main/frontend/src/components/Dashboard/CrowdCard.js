import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import { fetchData } from '../../api/fetchData';
import { extractCrowdData } from '../../api/dataExtractor';
import CustomPaper from './styles/CustomPaper';

// 혼잡도 단계별 배경색 지정
const getBackgroundColor = (level, theme) => {
  switch (level) {
    case '붐빔':
      return theme.palette.error.main; // 빨강
    case '약간 붐빔':
      return theme.palette.warning.main; // 주황
    case '보통':
      return theme.palette.info.main; // 노랑
    case '여유':
      return theme.palette.success.main; // 초록
    default:
      return theme.palette.background.paper; // 기본 배경색
  }
};

// 혼잡도 카드
const CrowdCard = () => {
  const theme = useTheme();
  const [crowdData, setCrowdData] = useState({ areaNm: '', areaCongestLvl: '', areaCongestMsg: '' });
  
  const { data: xmlData, error, isLoading } = useQuery('fetchData', fetchData, {
    refetchInterval: 300000, // 5분마다 갱신
  });

  useEffect(() => {
    if (xmlData) {
      console.log('Fetched XML Data:', xmlData);
      const extractedData = extractCrowdData(xmlData);
      console.log('Extracted Data:', extractedData);
      setCrowdData(extractedData);
    }
  }, [xmlData]);

  if (error) return <div>Error fetching data</div>;

  return (
    <Paper sx={CustomPaper(theme)}>
      {/* 로딩중 스켈레톤 적용 */}
      {isLoading ? (
        <Box>
          <Skeleton variant="text" width="60px" height="28px" />
          <Skeleton variant="text" width="100px" height="20px" />
          <Skeleton variant="text" width="80%" height="18px" />
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="subtitle2">
              혼잡도
            </Typography>
            <Typography
              variant="caption"
              sx={{
                backgroundColor: getBackgroundColor(crowdData.areaCongestLvl, theme),
                color: theme.palette.getContrastText(getBackgroundColor(crowdData.areaCongestLvl, theme)),
                padding: '3px',
                borderRadius: '4px',
                margin: '2px'
              }}
            >
              {crowdData.areaCongestLvl}
            </Typography>
          </Box>
          <Typography 
            sx={{
              color: theme.palette.text.primary,
              fontSize: '0.75rem',        
            }}
          >
            {crowdData.areaCongestMsg}
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default CrowdCard;
