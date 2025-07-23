---
title: Unified AI Assistant Workflow Specification
applyTo: '**'
description: 'Comprehensive AI assistant workflow combining process tracking, memory management, and specification-driven development practices.'
version: 2.0
date_created: 2025-01-23
last_updated: 2025-01-23
tags: ['process', 'workflow', 'ai-assistant', 'memory-bank', 'spec-driven']
---

# Unified AI Assistant Workflow Specification

## Introduction

This specification defines a comprehensive workflow system for AI assistants that combines process tracking, memory management, and specification-driven development practices. The workflow ensures consistent, traceable, and high-quality outputs across all AI assistant interactions while maintaining memory continuity between sessions.

## 1. Purpose & Scope

### Purpose
- **PUR-001**: Provide a standardized workflow for AI assistant interactions
- **PUR-002**: Ensure memory continuity across sessions through structured documentation
- **PUR-003**: Implement specification-driven development practices
- **PUR-004**: Enable traceable and auditable AI assistant processes

### Scope
- **SCO-001**: Applies to all AI assistant interactions within development workflows
- **SCO-002**: Covers process tracking, memory management, and specification development
- **SCO-003**: Includes documentation templates and validation requirements
- **SCO-004**: Excludes end-user facing application functionality

### Intended Audience
- AI assistants and automated agents
- Development team members
- Project maintainers and stakeholders

## 2. Definitions

- **AI Assistant**: Any AI-powered system performing development, documentation, or analysis tasks
- **Memory Bank**: Structured collection of markdown files maintaining project context
- **Process Tracking**: Systematic documentation of AI assistant activities and decisions
- **EARS Notation**: Easy Approach to Requirements Syntax for structured requirements
- **Specification-Driven**: Development approach where specifications guide implementation
- **Phase**: Discrete stage in the 6-phase development loop
- **Critical Constraint**: Mandatory condition that must be met before proceeding

## 3. Requirements, Constraints & Guidelines

### Process Tracking Requirements
- **REQ-001**: AI assistants MUST review these instructions in full before executing any steps
- **REQ-002**: AI assistants MUST follow instructions exactly as specified without deviation
- **REQ-003**: AI assistants MUST work silently within each step without combining or skipping steps
- **REQ-004**: AI assistants MUST create and maintain `Copilot-Processing.md` file for process tracking
- **REQ-005**: AI assistants MUST NOT repeat status updates or phase announcements unless explicitly required

### Memory Bank Requirements
- **REQ-006**: AI assistants MUST read all Memory Bank files at the start of every task
- **REQ-007**: AI assistants MUST maintain all core Memory Bank files as specified
- **REQ-008**: AI assistants MUST update Memory Bank when discovering new project patterns
- **REQ-009**: AI assistants MUST update Memory Bank after implementing significant changes
- **REQ-010**: AI assistants MUST use structured file naming conventions for tasks

### Specification-Driven Requirements
- **REQ-011**: AI assistants MUST maintain requirements.md, design.md, and tasks.md artifacts
- **REQ-012**: AI assistants MUST use EARS notation for all requirements
- **REQ-013**: AI assistants MUST complete all phase checklists before proceeding
- **REQ-014**: AI assistants MUST document all decisions using standardized templates
- **REQ-015**: AI assistants MUST assess confidence scores for all analysis phases

### Quality Constraints
- **CON-001**: No phase may be skipped or combined in a single response
- **CON-002**: All documentation must be machine-readable and parseable
- **CON-003**: All requirements must be testable and unambiguous
- **CON-004**: All file paths must be absolute when invoking tools
- **CON-005**: All templates must include required front matter fields

### Guidelines
- **GUD-001**: Use precise, explicit, and unambiguous language in all documentation
- **GUD-002**: Structure all content for automated parsing and execution
- **GUD-003**: Include specific file paths, function names, and exact implementation details
- **GUD-004**: Provide complete context within each task description
- **GUD-005**: Use standardized prefixes for all identifiers (REQ-, TASK-, etc.)

## 4. Interfaces & Data Contracts

### Process Tracking Interface
```markdown
# Copilot-Processing.md Structure
## User Request
[Original request details and context]

## Action Plan
- [ ] TASK-001: Specific task description
- [ ] TASK-002: Another task description

## Execution Log
### TASK-001 - [STATUS]
[Implementation details and results]

## Summary
[Final summary of all completed work]
```

### Memory Bank Structure
```
memory-bank/
├── projectbrief.md          # Core requirements, goals, and scope
├── productContext.md        # Purpose, problems solved, user experience goals
├── activeContext.md         # Current focus, recent changes, decisions, next steps
├── systemPatterns.md        # Architecture overview, design patterns, relationships
├── techContext.md           # Technology stack, setup, constraints, dependencies
├── progress.md              # Completed work, remaining tasks, known issues
└── tasks/
    ├── _index.md            # Master list of all tasks with statuses
    └── TASKID-taskname.md   # Individual task files
```

### Specification Artifacts Interface
```markdown
# requirements.md - EARS Notation Requirements
- **REQ-001**: WHEN [condition], THE SYSTEM SHALL [behavior]
- **REQ-002**: THE SYSTEM SHALL [expected behavior]

# design.md - Technical Architecture
## Architecture Overview
## Data Flow Diagrams
## Interfaces and APIs
## Error Handling Strategy

# tasks.md - Implementation Plan
## Task Breakdown
| Task ID | Description | Dependencies | Status |
|---------|-------------|--------------|--------|
```

## 5. Acceptance Criteria

### Process Tracking Acceptance Criteria
- **AC-001**: Given an AI assistant starts a task, When the workflow begins, Then `Copilot-Processing.md` file must be created in workspace root
- **AC-002**: Given process tracking is active, When each phase completes, Then the phase status must be documented before proceeding
- **AC-003**: Given all tasks are complete, When summary phase executes, Then user must be notified with exact text: "Added final summary to `Copilot-Processing.md`."

### Memory Bank Acceptance Criteria
- **AC-004**: Given an AI assistant session starts, When accessing Memory Bank, Then all 7 core files must be read and validated
- **AC-005**: Given new patterns are discovered, When Memory Bank updates occur, Then all affected files must be updated atomically
- **AC-006**: Given task management is required, When tasks are created, Then both individual task files and `_index.md` must be updated

### Specification-Driven Acceptance Criteria
- **AC-007**: Given the ANALYZE phase begins, When requirements are documented, Then all requirements must follow EARS notation syntax
- **AC-008**: Given confidence assessment occurs, When confidence score is below 66%, Then research and knowledge-building phase must be triggered
- **AC-009**: Given any phase completes, When documentation is generated, Then all standardized templates must be used with proper front matter

## 6. Test Automation Strategy

### Validation Levels
- **Test Level 1**: Template compliance validation for all generated documents
- **Test Level 2**: Cross-reference validation between Memory Bank files and process tracking
- **Test Level 3**: End-to-end workflow validation through complete 6-phase cycles

### Automation Requirements
- **AUTO-001**: All generated markdown must pass syntax validation
- **AUTO-002**: All front matter must conform to specified schemas
- **AUTO-003**: All file links must resolve to valid paths
- **AUTO-004**: All requirement identifiers must follow standardized prefixes

## 7. Workflow Phases Specification

### Phase 1: Initialization
**Objective**: Establish process tracking and context understanding

**Critical Constraints**: 
- **CC-001**: Must create `Copilot-Processing.md` before any other operations
- **CC-002**: Must populate file with complete user request details and context
- **CC-003**: Must mark phase complete before proceeding to planning

### Phase 2: Planning  
**Objective**: Generate comprehensive action plan with granular tasks

**Critical Constraints**:
- **CC-004**: Must generate detailed, granular task-specific action items
- **CC-005**: Must include clear descriptions, dependencies, and prerequisites for each task
- **CC-006**: Must ensure tasks are atomic and executable independently

### Phase 3: Execution
**Objective**: Execute planned tasks in logical groupings

**Critical Constraints**:
- **CC-007**: Must execute tasks in logical groupings as defined in plan
- **CC-008**: Must update `Copilot-Processing.md` after each completed grouping
- **CC-009**: Must repeat pattern until all action items are marked complete

### Phase 4: Summary
**Objective**: Provide comprehensive summary and cleanup

**Critical Constraints**:
- **CC-010**: Must execute only when ALL actions are complete
- **CC-011**: Must inform user with exact text: "Added final summary to `Copilot-Processing.md`."
- **CC-012**: Must remind user to review summary and remove file when done

## 8. Memory Bank Management Specification

### Core Workflow Modes

#### Plan Mode Workflow
1. **STEP-001**: Read all Memory Bank files using file reading tools
2. **STEP-002**: Check completeness against core file requirements
3. **STEP-003**: If incomplete, create plan and document gaps
4. **STEP-004**: If complete, verify context and develop execution strategy
5. **STEP-005**: Present approach to user with clear next steps

#### Act Mode Workflow  
1. **STEP-006**: Review Memory Bank for current state understanding
2. **STEP-007**: Update documentation (contexts, patterns, decisions) as needed
3. **STEP-008**: Execute task plan following 6-phase specification-driven loop
4. **STEP-009**: Document changes and log progress in appropriate Memory Bank files

### Task Management Protocol

#### Task Creation Process
- **TCP-001**: Generate unique Task ID following format `TASKXXX`
- **TCP-002**: Create individual task file `tasks/TASKXXX-taskname.md`
- **TCP-003**: Update master index file `tasks/_index.md` with new task entry
- **TCP-004**: Document complete thought process and implementation plan

#### Task Update Process
- **TUP-001**: Add new progress log entry with current date
- **TUP-002**: Update subtask status table with specific completion details
- **TUP-003**: Update overall task status and completion percentage
- **TUP-004**: Update `tasks/_index.md` to reflect current progress

## 9. Specification-Driven Development Loop

### 6-Phase Implementation Loop

#### Phase 1: ANALYZE
**Objective**: Understand problem, analyze existing system, produce clear requirements

**Mandatory Checklist**:
- [ ] **ANA-001**: Read all provided code, documentation, tests, and logs
- [ ] **ANA-002**: Define requirements in EARS notation format
- [ ] **ANA-003**: Identify dependencies, constraints, and edge cases  
- [ ] **ANA-004**: Map data flows and system interactions
- [ ] **ANA-005**: Assess confidence score (0-100%) and document rationale

**Critical Constraint**: **CC-013**: Do not proceed until all requirements are clear and documented

#### Phase 2: DESIGN
**Objective**: Create comprehensive technical design and implementation plan

**Mandatory Checklist**:
- [ ] **DES-001**: Define adaptive execution strategy based on confidence score
  - High Confidence (>85%): Full implementation plan
  - Medium Confidence (66-85%): Proof-of-concept first  
  - Low Confidence (<66%): Research and knowledge-building phase
- [ ] **DES-002**: Document technical design in `design.md`
- [ ] **DES-003**: Create implementation plan in `tasks.md` adapted to confidence level
- [ ] **DES-004**: Define testing strategy and unit test plan

**Critical Constraint**: **CC-014**: Do not proceed until design and plan are complete and validated

#### Phase 3: IMPLEMENT
**Objective**: Write production-quality code according to design and plan

**Mandatory Checklist**:
- [ ] **IMP-001**: Write code in small, testable increments
- [ ] **IMP-002**: Follow naming conventions and self-explanatory commenting guidelines
- [ ] **IMP-003**: Document each change with file paths and descriptions
- [ ] **IMP-004**: Update task status in real time

**Critical Constraint**: **CC-015**: Do not merge or deploy code until all implementation steps are documented and tested

#### Phase 4: VALIDATE
**Objective**: Verify implementation meets all requirements and quality standards

**Mandatory Checklist**:
- [ ] **VAL-001**: Execute automated tests and record outputs
- [ ] **VAL-002**: Perform manual verification and edge-case testing
- [ ] **VAL-003**: Validate performance and document metrics
- [ ] **VAL-004**: Log execution traces and runtime behavior

**Critical Constraint**: **CC-016**: Do not proceed until all validation steps are complete and issues resolved

#### Phase 5: REFLECT
**Objective**: Improve codebase, update documentation, analyze performance

**Mandatory Checklist**:
- [ ] **REF-001**: Refactor code for maintainability
- [ ] **REF-002**: Update all project documentation
- [ ] **REF-003**: Identify improvements and create backlog items
- [ ] **REF-004**: Validate success criteria and document results

**Critical Constraint**: **CC-017**: Do not close phase until all documentation and improvement actions are logged

#### Phase 6: HANDOFF
**Objective**: Package work for review and deployment, transition to next task

**Mandatory Checklist**:
- [ ] **HAN-001**: Generate executive summary using compressed decision record format
- [ ] **HAN-002**: Prepare pull request with action logs, decision records, and artifact links
- [ ] **HAN-003**: Archive intermediate artifacts to `.agent_work/`
- [ ] **HAN-004**: Continue to next task or document completion

**Critical Constraint**: **CC-018**: Do not consider task complete until all handoff steps are finished

## 10. Documentation Templates

### Action Documentation Template
```markdown
### [TYPE] - [ACTION] - [TIMESTAMP]
**Objective**: [Goal being accomplished]
**Context**: [Current state, requirements, and reference to prior steps]
**Decision**: [Approach chosen and rationale, referencing Decision Record if applicable]
**Execution**: [Steps taken with parameters and commands used. For code, include file paths.]
**Output**: [Complete and unabridged results, logs, command outputs, and metrics]
**Validation**: [Success verification method and results. If failed, include remediation plan.]
**Next**: [Automatic continuation plan to the next specific action]
```

### Decision Record Template
```markdown
### Decision - [TIMESTAMP]
**Decision**: [What was decided]
**Context**: [Situation requiring decision and data driving it]
**Options**: [Alternatives evaluated with brief pros and cons]
**Rationale**: [Why the selected option is superior, with trade-offs explicitly stated]
**Impact**: [Anticipated consequences for implementation, maintainability, and performance]
**Review**: [Conditions or schedule for reassessing this decision]
```

### Task File Template
```markdown
---
title: [TASKID] - [Task Name]
status: [Pending/In Progress/Completed/Abandoned]
date_created: [YYYY-MM-DD]
last_updated: [YYYY-MM-DD]
priority: [High/Medium/Low]
tags: [task-specific tags]
---

# [TASKID] - [Task Name]

## Original Request
[The original task description as provided by the user]

## Thought Process
[Documentation of the discussion and reasoning that shaped the approach]

## Implementation Plan
- [Step 1]
- [Step 2]
- [Step 3]

## Progress Tracking
**Overall Status**: [Not Started/In Progress/Blocked/Completed] - [Completion Percentage]

### Subtasks
| ID | Description | Status | Updated | Notes |
|----|-------------|--------|---------|-------|
| 1.1 | [Subtask description] | [Status] | [Date] | [Notes] |

## Progress Log
### [Date]
- [Detailed progress updates]
```

## 11. EARS Notation Reference

### Standard Requirement Formats
- **Ubiquitous**: `THE SYSTEM SHALL [expected behavior]`
- **Event-driven**: `WHEN [trigger event] THE SYSTEM SHALL [expected behavior]`
- **State-driven**: `WHILE [in specific state] THE SYSTEM SHALL [expected behavior]`
- **Unwanted behavior**: `IF [unwanted condition] THEN THE SYSTEM SHALL [required response]`
- **Optional**: `WHERE [feature is included] THE SYSTEM SHALL [expected behavior]`
- **Complex**: Combinations of the above patterns for sophisticated requirements

### Requirement Quality Criteria
Each requirement must be:
- **Testable**: Can be verified through automated or manual testing
- **Unambiguous**: Single interpretation possible
- **Necessary**: Contributes to the system's purpose
- **Feasible**: Can be implemented within constraints
- **Traceable**: Linked to user needs and design elements

## 12. Enforcement & Validation Rules

### Critical Enforcement Rules
- **ENF-001**: NEVER write "# Phase X" headers in responses
- **ENF-002**: NEVER repeat the word "Phase" in output unless explicitly required
- **ENF-003**: NEVER provide explanations beyond the exact text specified
- **ENF-004**: NEVER combine multiple phases in one response
- **ENF-005**: NEVER continue past current phase without user input
- **ENF-006**: If catching yourself being verbose, STOP and provide only required output
- **ENF-007**: If catching yourself about to skip a phase, STOP and go back to correct phase
- **ENF-008**: If catching yourself combining phases, STOP and perform only current phase

### Validation Checkpoints
- **VAL-005**: All generated markdown must pass syntax validation
- **VAL-006**: All front matter must conform to specified schemas
- **VAL-007**: All file links must resolve to valid relative paths
- **VAL-008**: All requirement identifiers must follow standardized prefixes
- **VAL-009**: All templates must be completed without placeholder text

## 13. Dependencies & External Integrations

### Tool Dependencies
- **DEP-001**: File system access for reading and writing Memory Bank files
- **DEP-002**: Markdown parsing capabilities for template validation
- **DEP-003**: YAML front matter processing for metadata extraction
- **DEP-004**: Git repository access for change tracking and version control

### Memory Bank File Dependencies
- **DEP-005**: All core Memory Bank files must exist before Act Mode execution
- **DEP-006**: Task index file must be updated atomically with individual task files
- **DEP-007**: Cross-references between Memory Bank files must remain consistent

### Specification Artifact Dependencies  
- **DEP-008**: requirements.md must exist and contain EARS notation requirements
- **DEP-009**: design.md must contain technical architecture and implementation details
- **DEP-010**: tasks.md must contain structured implementation plan with dependencies
