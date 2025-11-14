// src/components/ui/Table.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
`;

const TableHead = styled.thead`
  background: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    transition: background ${(props) => props.theme.transitions.fast};

    &:hover {
      background: ${(props) => props.theme.colors.surfaceHover};
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  white-space: nowrap;

  ${(props) => props.$align === "center" && "text-align: center;"}
  ${(props) => props.$align === "right" && "text-align: right;"}
`;

const TableCell = styled.td`
  padding: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};

  ${(props) => props.$align === "center" && "text-align: center;"}
  ${(props) => props.$align === "right" && "text-align: right;"}
`;

const EmptyState = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: 0.9375rem;
`;

const LoadingState = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${(props) => props.theme.colors.border};
  border-top-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Table = ({ children, className = "" }) => {
  const { theme } = useTheme();

  return (
    <TableWrapper theme={theme} className={className}>
      <StyledTable>{children}</StyledTable>
    </TableWrapper>
  );
};

Table.Head = ({ children }) => {
  const { theme } = useTheme();
  return <TableHead theme={theme}>{children}</TableHead>;
};

Table.Body = ({
  children,
  loading,
  empty,
  emptyMessage = "No data available",
}) => {
  const { theme } = useTheme();

  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan="100%">
            <LoadingState theme={theme}>
              <Spinner theme={theme} />
              <span>Loading...</span>
            </LoadingState>
          </td>
        </tr>
      </tbody>
    );
  }

  if (empty) {
    return (
      <tbody>
        <tr>
          <td colSpan="100%">
            <EmptyState theme={theme}>{emptyMessage}</EmptyState>
          </td>
        </tr>
      </tbody>
    );
  }

  return <TableBody theme={theme}>{children}</TableBody>;
};

Table.Row = ({ children, onClick }) => {
  return <TableRow onClick={onClick}>{children}</TableRow>;
};

Table.Header = ({ children, align = "left" }) => {
  const { theme } = useTheme();
  return (
    <TableHeader theme={theme} $align={align}>
      {children}
    </TableHeader>
  );
};

Table.Cell = ({ children, align = "left" }) => {
  const { theme } = useTheme();
  return (
    <TableCell theme={theme} $align={align}>
      {children}
    </TableCell>
  );
};

export default Table;
