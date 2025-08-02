import os

def generate_sidebar(root_dir='.', output_file='_sidebar.md', base_indent=0):
    sidebar_lines = []
    for item in sorted(os.listdir(root_dir)):
        path = os.path.join(root_dir, item)
        if os.path.isdir(path):
            # Adiciona diretório como título (sem link)
            sidebar_lines.append('  ' * base_indent + f'- {item}')
            # Recursão para subdiretórios
            sidebar_lines.extend(generate_sidebar(path, None, base_indent + 1))
        elif item.endswith('.md') and item != '_sidebar.md':
            # Adiciona link para arquivo .md
            rel_path = os.path.relpath(path, '.').replace('\\', '/').replace('.md', '')
            display_name = item[:-3]  # Remove .md
            sidebar_lines.append('  ' * base_indent + f'- [{display_name}]({rel_path})')
    
    if output_file:
        with open(os.path.join(root_dir, output_file), 'w', encoding='utf-8') as f:
            f.write('\n'.join(sidebar_lines))
    return sidebar_lines

if __name__ == '__main__':
    generate_sidebar()